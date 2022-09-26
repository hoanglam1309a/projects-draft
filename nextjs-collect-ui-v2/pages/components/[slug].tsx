import { Card } from "components/card";
import { CodeEditor } from "components/editor";
import { LayoutHome } from "layouts";

const ComponentDetailsPage = () => {
  return (
    <LayoutHome>
      <div className="max-w-[890px] px-[15px] mx-auto">
        <h1 className="my-5 text-3xl font-bold">Simple Card</h1>
        <div className="mx-auto">
          <div className="p-4 bg-white rounded-2xl max-w-[350px]">
            <img src="/card.png" alt="" className="rounded-xl" />
            <button className="w-full py-3 mt-4 font-semibold text-white rounded-xl bg-gradient-blue">
              View
            </button>
          </div>
          {/* <div className="flex-1 overflow-hidden rounded-lg"> */}
          {/* </div> */}
        </div>
        <CodeEditor
          code="(num) => num + 1"
          style={{ marginTop: "20px", padding: "20px", borderRadius: "8px" }}
        />
      </div>
    </LayoutHome>
  );
};

export default ComponentDetailsPage;
