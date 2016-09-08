class UserCollaboratedSongs extends React.Component {
  constructor() {
    super();
    this.sendSongToParent = this.sendSongToParent.bind(this);
  }

  sendSongToParent() {
    this.props.playSong(this.props.info.master.file_path)
  }

  render(){
    let info = this.props.info
    let dateObj = new Date(this.props.info.master.updated_at)
    let month = dateObj.getUTCMonth();
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let useMonth = monthNames[month]
    return(
      <div>
      { info === undefined ?
        null
        :
          <div className="collab_song">
          <ul className="details_list">
            <li><a href={'/songs/' + info.song.id}><img className="song_img" src={info.song.img_file_path} alt="Chania" /></a></li>
            <div className="song_details">
              <li><a href={'/songs/' + info.song.id}>Song Title: {info.song.title}</a></li>
              <br/>
              <li><a href={'/users/' + info.user.id}>User: {info.user.username}</a></li>
              <li><h5 className="date">Date: {useMonth + " " + day.toString() + " " + year.toString()}</h5></li>
              <li><p>Played {info.talent}</p></li>
              <li><button className="round-btn glyphicon glyphicon-play-circle" onClick={this.sendSongToParent}></button></li>
            </div>
            </ul>
          </div>
    }
      </div>
  );
}}
