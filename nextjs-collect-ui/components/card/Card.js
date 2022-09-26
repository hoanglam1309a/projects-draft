import { Template } from "components/common";

const Card = () => {
  return (
    <Template
      name="Simple card"
      html={`
        <div class="card">
          <img
            alt="image"
            class="card-image"
            src="https://file.publish.vn/gamefinity/2022-04/large/f7f999fb-83b6-40cf-a9af-d124724c6207-1650300936229.png"
          />
          <h3 class="card-title">Hotel Transylvania: Puppy!</h3>
          <p class="card-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, rerum. Quasi dolores
            laboriosam quos molestiae
          </p>
          <button type="button" class="card-button">
            Submit
          </button>
        </div>
      `}
      styleCss={`
        .card {
          max-width: 400px;
        }
        .card-image {
          border-radius: 8px;
        }
        .card-title {
          margin-top: 10px;
          font-weight:600;
        }
        .card-desc {
          font-size:15px;
          margin-top: 10px;
          color: #999999;
        }
        .card-button {
          margin-top: 16px;
          width: 100%;
          padding: 10px;
          font-weight: 700;
          background: #316bff;
          border-radius: 8px;
          color: white;
          outline: none;
          border: none;
        }
      `}
    ></Template>
  );
};

export default Card;
