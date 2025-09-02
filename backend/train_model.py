from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint
from model import load_model
import matplotlib.pyplot as plt
import os

IMG_SIZE = (224, 224)
BATCH_SIZE = 32

#data augmentation for ID classification
train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=15,
    width_shift_range=0.1,
    height_shift_range=0.1,
    brightness_range=[0.8, 1.2],  
    zoom_range=0.1,              
    horizontal_flip=True,
    fill_mode='nearest'
)

val_datagen = ImageDataGenerator(rescale=1./255)

# Load data generators
train_generator = train_datagen.flow_from_directory(
    './data/train',
    target_size=IMG_SIZE,
    batch_size=BATCH_SIZE,
    class_mode='binary'
)

val_generator = val_datagen.flow_from_directory(
    './data/val',
    target_size=IMG_SIZE,
    batch_size=BATCH_SIZE,
    class_mode='binary'
)

# Print data information
print(f"Training samples: {train_generator.samples}")
print(f"Validation samples: {val_generator.samples}")
print(f"Class indices: {train_generator.class_indices}")

# Load and compile model
model = load_model()
model.compile(
    optimizer='adam', 
    loss='binary_crossentropy', 
    metrics=['accuracy']
)

# Callbacks for better training
callbacks = [
    # Stop training if validation loss doesn't improve
    EarlyStopping(
        monitor='val_loss', 
        patience=5, 
        restore_best_weights=True,
        verbose=1
    ),
    # Save best model during training
    ModelCheckpoint(
        'best_id_classifier.weights.h5',
        monitor='val_accuracy',
        save_best_only=True,
        save_weights_only=True,
        verbose=1
    )
]

# Determine epochs based on dataset size
total_samples = train_generator.samples
if total_samples < 100:
    epochs = 10
    print("Small dataset detected: Using 10 epochs")
elif total_samples < 500:
    epochs = 20
    print("Medium dataset detected: Using 20 epochs")
else:
    epochs = 30
    print("Large dataset detected: Using 30 epochs")

# Train the model
print("\nStarting training...")
history = model.fit(
    train_generator, 
    validation_data=val_generator, 
    epochs=epochs,
    callbacks=callbacks
)

# Save final weights
model.save_weights("id_classifier_weights.weights.h5")
print("Training complete! Weights saved.")

# Plot training history
def plot_training_history(history):
    """Plot training and validation accuracy and loss"""
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))
    
    # Accuracy plot
    ax1.plot(history.history['accuracy'], label='Training Accuracy')
    ax1.plot(history.history['val_accuracy'], label='Validation Accuracy')
    ax1.set_title('Model Accuracy')
    ax1.set_xlabel('Epoch')
    ax1.set_ylabel('Accuracy')
    ax1.legend()
    ax1.grid(True)
    
    # Loss plot
    ax2.plot(history.history['loss'], label='Training Loss')
    ax2.plot(history.history['val_loss'], label='Validation Loss')
    ax2.set_title('Model Loss')
    ax2.set_xlabel('Epoch')
    ax2.set_ylabel('Loss')
    ax2.legend()
    ax2.grid(True)
    
    plt.tight_layout()
    plt.savefig('training_history.png')
    plt.show()
    print("Training history plot saved as 'training_history.png'")

# Generate training plots
try:
    plot_training_history(history)
except:
    print("Could not generate plots (matplotlib might not be available)")

# Print final results
final_train_acc = history.history['accuracy'][-1]
final_val_acc = history.history['val_accuracy'][-1]
final_train_loss = history.history['loss'][-1]
final_val_loss = history.history['val_loss'][-1]

print(f"\n=== TRAINING RESULTS ===")
print(f"Final Training Accuracy: {final_train_acc:.4f}")
print(f"Final Validation Accuracy: {final_val_acc:.4f}")
print(f"Final Training Loss: {final_train_loss:.4f}")
print(f"Final Validation Loss: {final_val_loss:.4f}")

# Check for overfitting
if final_train_acc - final_val_acc > 0.1:
    print("\n WARNING: Possible overfitting detected!")
    print("   - Consider adding more validation data")
    print("   - Try reducing model complexity")
    print("   - Increase data augmentation")
elif final_val_acc > 0.95 and train_generator.samples < 200:
    print("\n  WARNING: Very high accuracy with small dataset!")
    print("   - This might indicate overfitting")
    print("   - Consider collecting more diverse data")
else:
    print("\n Training completed successfully!")