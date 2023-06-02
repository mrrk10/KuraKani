import Styles from '../../styles/message.module.css'
const Message = ({own}) => {
  return (
    <div className={own?Styles.own:Styles.message}>
    <div className={Styles.messageTop}>
      <img
        className={Styles.messageImg}
        src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <p className={Styles.messageText}>hey whats up</p>
    </div>
    <div className={Styles.messageBottom}>1 hour ago</div>
  </div>
  )
}

export default Message