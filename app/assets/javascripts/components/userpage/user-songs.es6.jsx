class UserSongs extends React.Component {
  render(){
    let info = this.props.info
    return(
      <div>
      { info === undefined ?
        null
        :
      <div id="myCarousel" className="carousel slide" data-ride="carousel">

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="img_chania.jpg" alt="Chania" />
            <div className="carousel-caption">
              
              <h4>Song Title: {info.title}</h4>
              <h5>Date: {info.updated_at}</h5>
              <p>Description: {info.background}</p>
            </div>
          </div>
        </div>   

      </div>
    }
      </div>
  );
}}