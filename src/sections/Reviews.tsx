const Reviews = () => {
  const reviews = [
    {
      name: "Liliana Bento",
      message:
        "que coiisa sslafdsnfkuqb  aiwuerybvaiu akesdfna dhf dhfd oa sdpfosiafuodsbn a0sdnfuhhdghfo gdgfa ydasuid asuhduasyfds aiuyhd9oasosadipjadson",
    },
    {
      name: "Liliana Bento",
      message:
        "dfsdafkldsjf sfsdfhjsda ufkhads fvasdfkhfvksdj bhgvjhkfdsb vhjksdfhb vksdfh vdfxkv aihfvirudhfgkrd",
    },
    {
      name: "Liliana Bento",
      message:
        "sdfl,alkçdsfjknioaes sdfvjsdnuighndsfiv sdfvdfuishvbksdufbhvnlsdfhjlvbfd",
    },
    {
      name: "Liliana Bento",
      message: "fdgbvsfd ghsdfghn s tgf hjn ghs rtneh trs rgtfhbfgshb",
    },
    {
      name: "Liliana Bento",
      message:
        "dfhsgsfgd hdrtshnt rseuhrtmjhdrtyhmn srtu t6jcjdxt nuy6rmsdyhjrt t76uik yjkty ugmcxddjxnfhgm xfgh sjxgrfhsr jtnxgs rgnfsfgbhn dsgfdh st nd xnfghsn ",
    },
    {
      name: "Liliana Bento",
      message:
        "sdfghfgsdhn srth nrtsjetyhm drtyuj nvcddsffgfbadr  htrh fgdsgvsdbfd bgfdb dfgb grfhb trg htfyh dtrh ",
    },
    {
      name: "Liliana Bento",
      message:
        "fdaskiortrdtiosklgilkndrsb kgf khgshjkfdgbshjkl fdgjdfbjhkjkdfbhvjkfdhvgbijhkufdhjbvgfghdjhbvfdjkhv hbrdsfkiuhgfdfhvjv nbfgb jfghbvu jfdvbjdf kjbhvufg hbjoidfhviukjfdhvjkdshgviksdfhhvbcxvjkvhsdikfkiksdifçsd jfoçsedrkpogfipodºrgikçowesrjgçoiuq+ibd dvcfgi´pd+fqbg iuu+ohj ",
    },
    {
      name: "Liliana Bento",
      message:
        "dgf,lkçdxkntgbliorstdgilkrejgbi ldfilkgjfkjhvb dkfjbvdfkjhb vkhjfd vbhiusdfrgh piçuerdhg fiuqverghuifdpbivub iuviurfh viuviudw vipufdbvpy89 eartghuifbvou9aerh g9p+uqehg9+ufrh g09iufrehgoiufdhgvuoifdhg8yw4580tyv25 4809tyg89'547y t25983747t6580493w7 ytvpw84905ygh h9'8e jb8ijbpu9rthb08uy9 th0789uyb2t4bh7'95t3y2hgb '75t3hjbv 3y57uhb 508u3bh 6324utyghh36t5buy' 79yh 6384 hjg4e5'98uy '98«h6j54«80",
    },
  ];
  return (
    <section className="flex flex-wrap gap-8 max-sm:gap-10 max-sm:px-5 padding-t">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="p-10 bg-bg-grey-card rounded-2xl flex-1 basis-[30%] max-lg:basis-[45%] max-md:basis-full h-fit shadow-2xl overflow-auto"
        >
          <p className="mb-10">{review.message}</p>
          <h3 className="flex gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            {review.name}
          </h3>
        </div>
      ))}
    </section>
  );
};

export default Reviews;
