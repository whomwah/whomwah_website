import './style.css'
import './particles'

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="relative container p-8 font-istok">
    <div class="max-w-2xl">
      <h1 class="pb-2 font-medium">Hello 👋, I'm Duncan Robertson</h1>
      <p>
        I build
        <a
          href="https://github.com/whomwah/rqrcode"
          class="underline hover:link-color"
          title="RQRCode is a library for creating and rendering QR codes into various formats"
          >cool</a
        >
        <a
          href="https://github.com/whomwah/qlstephen"
          class="underline hover:link-color"
          title="QLStephen is a QuickLook plugin that lets you view text files without their own dedicated QuickLook plugin"
          >stuff</a
        >
        for web, mobile or desktop. I currently work for
        <a
          href="https://kyan.com"
          class="underline hover:link-color"
          title="My current employer"
          >Kyan</a
        >. In a previous life I've computed for the
        <a
          href="https://www.bbc.co.uk/programmes"
          class="underline hover:link-color"
          title="My previous employer"
          >BBC</a
        >, designed and built mountain bike parts, programmed
        <a
          href="https://en.wikipedia.org/wiki/Numerical_control"
          class="underline hover:link-color"
          title="My previous career"
          >mechanical machines</a
        >, and dabbled in nuclear power.
      </p>
      <div>
        <div class="mt-4 flex">
          <a
            href="https://github.com/whomwah"
            title="My Github account"
            class="transition duration-150 ease-in-out text-gray-900 hover:link-color transform hover:-translate-y-1 hover:scale-105"
          >
            <span class="sr-only">GitHub</span>
            <svg
              class="h-8 w-8 inline"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              ></path></svg
          ></a>
          <a
            href="https://twitter.com/whomwah"
            title="My Twitter account (not used much)"
            class="transition duration-150 ease-in-out text-gray-900 hover:link-color transform hover:-translate-y-1 hover:scale-105 ml-3"
          >
            <span class="sr-only">Twitter</span>
            <svg
              class="h-8 w-8 inline"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
              ></path></svg
          ></a>
        </div>
      </div>
    </div>
  </div>
`;