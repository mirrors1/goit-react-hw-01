import style from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={style.card}>
      <div>
        {image && <img className={style.ava} src={image} alt="User avatar" />}
        {name && <p className={style.name}>{name}</p>}
        {tag && <p className={style.tag}>&#64;{tag}</p>}
        {location && <p className={style.location}>{location}</p>}
      </div>
      <ul className={style.list}>
        {stats.followers && (
          <li className={style.item}>
            <span className={style.itemSpanTitle}>Followers</span>
            <span className={style.itemSpanValue}>{stats.followers}</span>
          </li>
        )}
        {stats.views && (
          <li className={style.item}>
            <span className={style.itemSpanTitle}>Views</span>
            <span className={style.itemSpanValue}>{stats.views}</span>
          </li>
        )}
        {stats.likes && (
          <li className={style.item}>
            <span className={style.itemSpanTitle}>Likes</span>
            <span className={style.itemSpanValue}>{stats.likes}</span>
          </li>
        )}
      </ul>
    </div>
  );
}
