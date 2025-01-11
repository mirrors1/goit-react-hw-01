import style from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      {avatar && (
        <img className={style.avatar} src={avatar} alt="Avatar" width="48" />
      )}
      <p className={style.name}>{name}</p>
      {isOnline ? (
        <p className={style.colorOnline}>Online</p>
      ) : (
        <p className={style.colorOffline}>Offline</p>
      )}
    </div>
  );
}
