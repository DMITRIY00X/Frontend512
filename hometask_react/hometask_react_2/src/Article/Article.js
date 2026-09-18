import "./Article.css";



function Article(props) {
    let { db } = props;
    return (

        <div className="app">

            {
                Object.keys(db).map(elem => {
                    return (
                        <div className="card">
                            <img src={db[elem].photo} alt="" />
                            <div className="name">
                                {db[elem].name} {db[elem].surname}
                            </div>
                            <div className="age">
                                {db[elem].music}
                            </div>
                            <div className="year">
                                {db[elem].year}
                            </div>
                            {/* <div className="pol">
                                <img src={(db[elem].pol === "male") ? mars : female} alt="" />
                            </div> */}

                        </div>
                    )

                })
            }
        </div>
    )
}
export default Article;