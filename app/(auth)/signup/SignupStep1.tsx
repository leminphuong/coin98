import Link from "next/link";

export default function SignupStep1() {
  return (
    <div className="bg-background pb-500 md:pb-1300 pt-1500 flex flex-col items-center w-screen h-screen overflow-hidden">
      
      {/* Title */}
      <div className="w-full max-w-w680 flex flex-col items-center article-h3 text-center text-text-primary">
        <i className="ab-icon !not-italic text-icon-link text-size-1100 mb-200 ab-amber_logo_mark"></i>
        Join the AmberBlocks
      </div>

      <div className="mt-500 relative w-full max-w-w680">
        
        {/* Back Button */}
        <div className="fixed select-none left-200 top-1200 md:absolute md:top-100 md:left-0 w-fit h-fit overflow-hidden">
          <div className="w-fit h-fit transition-all ease-linear opacity-0 translate-x-100% duration-0">
            
            {/* Mobile */}
            <button className="group/ab-button flex items-center justify-center rounded-050 bg-button-ghost-background p-100 md:hidden">
              <i className="ab-icon text-size-800 ab-arrow_left"></i>
            </button>

            {/* Desktop */}
            <button className="group/ab-button hidden md:flex items-center justify-center rounded-050 bg-button-ghost-background py-050 px-100">
              <i className="ab-icon text-size-400 mr-100 ab-arrow_left"></i>
              <span className="button-text-medium text-button-ghost-text">Back</span>
            </button>
          </div>
        </div>

        {/* FORM */}
        <div className="w-full relative select-none max-w-w320 mx-auto overflow-hidden">
          <form className="select-none transition-all duration-300 ease-linear relative opacity-100 translate-x-0">

            {/* EMAIL */}
            <div className="flex flex-col">
              <label htmlFor="email" className="h-600 flex items-center py-150 border-0125 border-border cursor-text">
                <i className="ab-icon mr-150 text-size-800 ab-mail"></i>
                <input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                  className="outline-none bg-transparent flex-1 text-text-primary placeholder:text-text-subtlest"
                />
              </label>
            </div>

            {/* DISPLAY NAME */}
            <div className="flex flex-col mt-400">
              <label htmlFor="displayName" className="h-600 flex items-center py-150 border-0125 border-border cursor-text">
                <i className="ab-icon mr-150 text-size-800 ab-admin"></i>
                <input
                  id="displayName"
                  name="displayName"
                  placeholder="Your display name"
                  autoComplete="off"
                  className="outline-none bg-transparent flex-1 text-text-primary placeholder:text-text-subtlest"
                />
              </label>
              <div className="mt-050 text-text-subtlest ui-text-x-small">Example: John</div>
            </div>

            {/* CHECK BOX */}
            <div className="flex items-start mt-400">
              <div className="flex items-center mr-075">
                <div className="flex items-center rounded-075 p-025 h-250 w-250">
                  <div className="rounded-050 border-025 border-cbr-30 bg-toggle-background-active w-full h-full flex justify-center">
                    <div className="rotate-45 mt-0125 w-075 h-100"></div>
                  </div>
                </div>
              </div>
              <span className="ui-text-x-small">
                I confirm that I am at least 18 years old and agree to{" "}
                <Link className="ui-text-x-small-emphasis text-text-highlight" href="https://docs.amberblocks.com/terms-of-service" target="_blank">Terms of Service</Link>,{" "}
                <Link className="ui-text-x-small-emphasis text-text-highlight" href="https://docs.amberblocks.com/" target="_blank">Publisher Terms</Link>,{" "}
                and{" "}
                <Link className="ui-text-x-small-emphasis text-text-highlight" href="https://docs.amberblocks.com/privacy-policy" target="_blank">Privacy Policy</Link>.
              </span>
            </div>

            {/* Continue */}
            <button type="submit" className="group/ab-button w-full mt-400 rounded-050 bg-button-primary-background py-100 px-150">
              <span className="button-text-large text-button-primary-text">Continue</span>
            </button>
          </form>

          {/* Sign in */}
          <Link href="/signin">
            <button className="group/ab-button w-full mt-200 rounded-050 bg-button-ghost-background py-100 px-150">
              <span className="text-button-ghost-text button-text-large">Sign in</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
