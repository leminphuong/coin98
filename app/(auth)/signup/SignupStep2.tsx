export default function SignupStep2() {
  return (
    <div className="bg-background pb-500 md:pb-1300 pt-1500 flex flex-col items-center w-screen h-screen overflow-hidden">

      {/* Title */}
      <div className="w-full max-w-w680 flex flex-col items-center article-h3 text-center text-text-primary">
        <i className="ab-icon text-size-1100 mb-200 ab-amber_logo_mark"></i>
        Join the AmberBlocks
      </div>

      <div className="mt-500 relative w-full max-w-w680">
        
        {/* Back button */}
        <div className="fixed left-200 top-1200 md:absolute md:top-100 md:left-0">
          <button className="group/ab-button hidden md:flex items-center bg-button-ghost-background py-050 px-100 rounded-050">
            <i className="ab-icon text-size-400 mr-100 ab-arrow_left"></i>
            <span className="button-text-medium">Back</span>
          </button>
        </div>

        {/* FORM */}
        <div className="w-full max-w-w320 mx-auto">
          <form className="transition-all duration-300 ease-linear opacity-100 translate-x-0">

            {/* PASSWORD */}
            <div className="flex flex-col">
              <label htmlFor="password" className="h-600 flex items-center py-150 border-0125 border-border cursor-text">
                <i className="ab-icon mr-150 text-size-800 ab-permission"></i>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  className="outline-none bg-transparent flex-1 text-text-primary placeholder:text-text-subtlest"
                />
              </label>
            </div>

            {/* RULES */}
            <div className="mt-200 ui-text-x-small">Password must have at least:</div>

            {[
              "8 characters",
              "1 upper case letter",
              "1 digit",
              "1 special character (ex: @, #, $, %, &)"
            ].map((text, index) => (
              <div key={index} className="flex items-center py-050">
                <i className="ab-icon text-size-400 text-icon-system-green ab-chevron_check"></i>
                <span className="ui-text-x-small ml-100">{text}</span>
              </div>
            ))}

            {/* CONFIRM */}
            <div className="flex flex-col mt-400">
              <label htmlFor="confirmPassword" className="h-600 flex items-center py-150 border-0125 border-border cursor-text">
                <i className="ab-icon mr-150 text-size-800 ab-permission"></i>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Re-enter password"
                  className="outline-none bg-transparent flex-1 text-text-primary placeholder:text-text-subtlest"
                />
              </label>
            </div>

            {/* Continue */}
            <button className="group/ab-button w-full mt-400 rounded-050 bg-button-primary-background py-100 px-150">
              <span className="button-text-large text-button-primary-text">Continue</span>
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
