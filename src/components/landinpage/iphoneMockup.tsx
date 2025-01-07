import Iphone15Pro from "@/components/ui/iphone-15-pro";

export function Iphone15ProDemo() {
  return (
    <div className="relative flex justify-center flex-col items-center gap-10 ">
        <h1 className="font-bold lg:text-3xl sm:text-xl">Download Our App From AppStore!</h1>
      <Iphone15Pro
        className="size-65"
        videoSrc="/iphonemock.mp4"
      />
    </div>
  );
}
