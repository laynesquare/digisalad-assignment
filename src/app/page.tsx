import Image from "next/image";
import { clsx } from "clsx";

// reproduce all pages first, and then do componenization

// padding x => 48px (temp)
// 使用 ssg 利於 seo
// webp
// 使用 pseudo-element 避免圖片過多
// 使用 svg 避免圖片過多 以及 pixelated

export default function Home() {
  return (
    <article className="font-primary text-primary">
      <header className="bg-hero-background 3xl:h-[auto] rounded-b-primary relative h-dvh bg-cover bg-top px-[220px] pb-[181px] pt-[181px]">
        <Image
          className="mb-[34px]"
          width={198.71}
          height={88}
          priority
          src="/hero-brand-logo.svg"
          alt="DigiSalad"
        />
        <h2 className="ml-[6px] text-[38px] font-bold leading-[70px] tracking-[9.16px]">
          <span className="block">WE CREATE</span>
          <span className="block">AMAZING</span>
          <span
            className={clsx(
              `relative z-[1] block w-max`,
              // blue bar
              `before:translate-x-[-1.6%] before:translate-y-[-220%]`,
              `before:absolute before:bottom-0 before:left-0 before:-z-10 before:box-content before:h-0 before:w-[571px] before:border-[4px] before:border-[var(--color-bar-primary)] before:bg-[var(--color-bar-primary)] before:content-['']`,
              // orange dot
              `after:translate-x-[124%] after:translate-y-[-210%]`,
              `after:absolute after:bottom-0 after:right-0 after:z-[-1] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[var(--color-dot-primary)] after:content-['']`,
            )}
          >
            DIGITAL EXPERIENCES
          </span>
        </h2>

        <p
          className={clsx(
            `absolute left-0 top-[249px] origin-top-right -translate-x-[61%] -rotate-90 text-[16px] font-bold leading-[19.49px] tracking-[2.22px]`,
            `before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-[113px]`,
            `before:-translate-x-[120%] before:-translate-y-1/2 before:transform before:bg-[var(--color-bar-neutral)] before:content-['']`,
          )}
        >
          DIGITAL AGENCY
        </p>
        <div
          className={clsx(
            `absolute bottom-0 left-1/2 mb-[75px] flex -translate-x-1/2 flex-col items-center gap-[11px]`,
            `after:translate-x-[-50%] after:translate-y-[122%]`,
            `after:absolute after:bottom-0 after:left-1/2 after:h-[130px] after:w-[1px]`,
            `after:bg-gradient-to-b after:from-[var(--color-bar-neutral)] after:to-[var(--color-bar-contrast-neutral)] after:content-[''] after:[--tw-gradient-stops:var(--color-bar-neutral)_35.5%,var(--color-bar-contrast-neutral)_35.5%]`,
          )}
        >
          <Image
            width={65}
            height={65}
            priority
            src="/hero-cta-salad.svg"
            alt="Scroll to view more"
          />

          <p className="text-[14px] font-bold leading-[17.05px] tracking-[2px]">
            TASTE US NOW!
          </p>
        </div>
      </header>

      <section className="m-auto flex max-w-screen-xl flex-col items-center px-[216px] py-[125px]">
        <h2
          className={clsx(
            `test text-secondary relative mb-[86px] text-[28px] font-bold leading-[34.1px] tracking-[3.64px]`,
            `after:translate-x-[300%] after:translate-y-[-60%]`,
            `after:absolute after:bottom-0 after:right-0 after:z-[-1] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[var(--color-dot-primary)] after:content-['']`,
          )}
        >
          ABOUT DIGISALAD
        </h2>

        <div className="mb-[30px] max-w-[1007px]">video</div>

        <p
          className={clsx(
            `text-tertiary mb-[30px] whitespace-pre-line text-center text-[16px] leading-[28px] tracking-[1px]`,
          )}
        >
          {`Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.`}
        </p>

        <button>VIEW MORE</button>
      </section>
    </article>
  );
}
