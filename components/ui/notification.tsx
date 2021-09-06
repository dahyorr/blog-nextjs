import ReactDOM from 'react-dom';
import styles from '@/styles/notification.module.css';
import { NotificationItem} from '@/types'

interface NotificationProps{
  content: NotificationItem;
}

const Notification: React.FC<NotificationProps> = ({content}) => {
  const { title, message, status } = content
  let statusClasses = '';

  if (status === 'success') {
    statusClasses = styles.success;
  }

  if (status === 'error') {
    statusClasses = styles.error;
  }

  const cssClasses = `${styles.notification} ${statusClasses}`;

  return ReactDOM.createPortal((
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ), document.getElementById('notifications') as HTMLElement)
}

export default Notification;
