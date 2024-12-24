const Course = ({course}) => {
    const {id, title, description, price, link, image} = course;
    return (
        <div className="course">
            <div className="card" key={id}>
                <img src={image} alt={title} width={250} />
                <h3 className="card-title">{title}</h3>
                <h5 className="card-desc">{description}</h5>
                <h5 className="course-price">{price} TL</h5>
                <a href={link} target="_blank" className="card-shop">Buy Course</a>
            </div>
        </div>
    )
}

export default Course