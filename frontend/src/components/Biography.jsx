import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          debitis accusamus quaerat error ea nihil rerum repellat repudiandae
          magni, possimus quisquam nisi illo exercitationem eius dignissimos
          dolorum, eum reprehenderit quia aut molestiae fugiat voluptatum quos
          velit maiores. Enim animi nulla quasi quia, modi quis provident ullam,
          sint ducimus quidem harum?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis in,
          quos veniam neque quod autem tempore distinctio sed dolores quia iusto
          suscipit magnam quasi provident quis reprehenderit voluptatibus
          incidunt ullam praesentium consequatur? Nulla, molestias eaque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          perspiciatis perferendis architecto.
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;
