const Features = ({ arr }: { arr: string[] }) => {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <h2 className="font-bold text-xl">
        Popüler Konaklama Yeri İmkan vE özellikleri
      </h2>

      <div className="grid grid-cols-2 gap-2">
        {arr.map((i, key) => (
          <span className="border bg-zinc-100 py-1 px-2 rounded-md" key={key}>
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Features;
