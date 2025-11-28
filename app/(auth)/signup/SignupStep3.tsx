export default function SignupStep3() {
  return (
    <div className="bg-background pb-500 md:pb-1300 pt-1500 flex flex-col items-center w-screen h-screen overflow-hidden">

      {/* TITLE */}
      <div className="w-full max-w-w680 text-center article-h3 text-text-primary flex flex-col items-center">
        <i className="ab-icon text-size-1100 mb-200 ab-amber_logo_mark"></i>
        Join the AmberBlocks
      </div>

      <div className="mt-500 relative w-full max-w-w680">

        {/* Back */}
        <div className="fixed left-200 top-1200 md:absolute md:top-100 md:left-0">
          <button className="group/ab-button hidden md:flex items-center py-050 px-100 rounded-050 bg-button-ghost-background">
            <i className="ab-icon text-size-400 mr-100 ab-arrow_left"></i>
            <span className="button-text-medium">Back</span>
          </button>
        </div>

        {/* FORM */}
        <div className="w-full max-w-w320 mx-auto">
          <form className="transition-all duration-300 ease-linear opacity-100 translate-x-0">

            <div className="py-150 ui-text-small">
              An OTP has been sent to your email address
              <br />
              <span className="ui-text-small-emphasis">yourmail@example.com</span>
            </div>

            {/* OTP */}
            <div className="flex flex-col mt-400">
              <label htmlFor="otp" className="h-600 flex items-center py-150 border-0125 border-border cursor-text">
                <input
                  id="otp"
                  name="otp"
                  placeholder="Enter OTP code"
                  className="flex-1 outline-none text-text-primary placeholder:text-text-subtlest"
                />
                <span className="ml-200 ui-text-small text-text-subtlest">52s</span>
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className="group/ab-button w-full mt-400 rounded-050 bg-button-primary-background py-100 px-150">
              <span className="button-text-large text-button-primary-text">Sign up</span>
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
