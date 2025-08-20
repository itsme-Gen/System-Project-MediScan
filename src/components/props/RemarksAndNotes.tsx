import { FileText } from 'lucide-react';
import styles from "./RemarksAndNotes.module.css";

const RemarksAndNotes = () => {
  return (
    <div className={styles.remarks_card}>
      <div className={styles.remarks_header}>
        <FileText size={20} />
        <h3>Remarks & Notes</h3>
      </div>
      <div className={styles.remarks_subtitle}>
        Additional medical notes and observations
      </div>
      <textarea
        className={styles.remarks_textarea}
        placeholder="Enter any additional medical notes, allergies, special conditions, or remarks..."
      />
    </div>
  );
}

export default RemarksAndNotes;
