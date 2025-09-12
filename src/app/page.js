import Image from "next/image";
import { News } from "@/components/NewsCard";
import { Story } from "@/components/Story";

export default function Home() {
  return (
    <div>
      <div className=" News flex">
        <News
          shareCount="100"
          commentCount="1k"
          text="Монгол, Хятад, Орос гурван улсын төрийн тэргүүн уулзлаа"
          image="https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2025/09/-02092025-1756795431-1134795312-Putin_Shi_Hurelsuh.jpg"
        />
        <News
          image="https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2025/09/334349-02092025-1756811927-968744391-2.jpg"
          shareCount="7"
          commentCount="0"
          text="Mobihome - Өрхийн үйлчилгээний шинэ эхлэл"
        />
      </div>
      <div className="Story flex">
        <Story
          text="9-р сард нийгмийн халамжийн тэтгэвэр,"
          viewsCount="113"
          image="bg-[url(https://mgl.gogo.mn/newsn/story/huuhdiin-mongo1-68b6d58a69a61667548623.jpg)]"
        ></Story>
        <Story
          viewsCount="256"
          text="Афганистанд болсон газар хөдлөлтийн "
          image="bg-[url(https://mgl.gogo.mn/newsn/story/1-68b67b30999aa325421575.jpg)]"
        ></Story>
      </div>
      <div></div>
    </div>
  );
}
