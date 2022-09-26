import { ComicSuggest } from "modules/comic";

const comic = {
  slug: "toi-chuyen-vang-tai-mat-the-309490",
  title: "\nTôi Chuyển Vàng Tại Mạt Thế\n",
  posterUrl: "//st.ntcdntempv3.com/data/comics/229/toi-chuyen-vang-tai-mat-the.jpg",
  newestChapter: "Chapter 383",
  updatedAgo: "\n\n 9 ngày trước",
  newestHref: "toi-chuyen-vang-tai-mat-the/chap-383/902440",
};

const HomeBanner = () => {
  return (
    <section>
      <div className="layout-container">
        <h2 className="text-xl text-blue29 mb-[10px]">Truyện đề cử</h2>
        <ComicSuggest
          slug={comic.slug}
          title={comic.title}
          posterUrl={comic.posterUrl}
          chapter={comic.newestChapter}
          updatedAgo={comic.updatedAgo}
        />
      </div>
    </section>
  );
};

export default HomeBanner;
