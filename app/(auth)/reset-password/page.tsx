"use client";

export default function ResetPasswordPage() {
  return (
    <div className="bg-background w-screen h-screen overflow-hidden flex flex-col items-center pt-1500 pb-500">
      <div className="w-full max-w-w680">

        {/* Logo */}
        <div className="flex justify-center">
          <i className="ab-icon !not-italic ab-amber_logo_mark text-icon-link text-size-1100"></i>
        </div>

        {/* Title */}
        <div className="article-h3 text-center text-text-primary mt-200">
          Reset password
        </div>

        <div className="mt-500 relative">
          <form className="max-w-w320 mx-auto">

            {/* ============================== */}
            {/* NEW PASSWORD */}
            {/* ============================== */}
            <div>
              <label className="h-600 flex items-center bg-background py-150 border-0 border-b-0125 border-border-inverse px-0 cursor-text">
                <i className="ab-icon ab-permission mr-150 text-size-800" />
                <input
                  type="password"
                  placeholder="New password"
                  className="w-full bg-transparent outline-0 ui-text-medium text-text-primary placeholder:text-text-disabled caret-text-primary"
                  name="password"
                />
                <i className="ab-icon ab-hidden ml-150 text-size-800 md:hover:cursor-pointer" />
              </label>
            </div>

            {/* PASSWORD RULES */}
            <div className="mt-200">
              <div className="ui-text-x-small">Password must have at least:</div>

              {/* Rule: >= 8 characters */}
              <div className="flex items-center py-050">
                <div className="relative w-200 h-200 flex justify-center mr-100">
                  <i className="ab-icon ab-chevron_check text-size-400 text-border-subtle" />
                </div>
                <div className="ui-text-x-small">8 characters</div>
              </div>

              {/* Rule: uppercase */}
              <div className="flex items-center py-050">
                <div className="relative w-200 h-200 flex justify-center mr-100">
                  <i className="ab-icon ab-chevron_check text-size-400 text-border-subtle" />
                </div>
                <div className="ui-text-x-small">1 upper case letter</div>
              </div>

              {/* Rule: digit */}
              <div className="flex items-center py-050">
                <div className="relative w-200 h-200 flex justify-center mr-100">
                  <i className="ab-icon ab-chevron_check text-size-400 text-border-subtle" />
                </div>
                <div className="ui-text-x-small">1 digit</div>
              </div>

              {/* Rule: special char */}
              <div className="flex items-center py-050">
                <div className="relative w-200 h-200 flex justify-center mr-100">
                  <i className="ab-icon ab-chevron_check text-size-400 text-border-subtle" />
                </div>
                <div className="ui-text-x-small">
                  1 special character (ex: @, #, $, %, &,...)
                </div>
              </div>
            </div>

            {/* ============================== */}
            {/* CONFIRM PASSWORD */}
            {/* ============================== */}
            <div className="mt-400">
              <label className="h-600 flex items-center bg-background py-150 border-0 border-b-0125 border-border-inverse px-0 cursor-text">
                <i className="ab-icon ab-permission mr-150 text-size-800" />
                <input
                  type="password"
                  placeholder="Repeat new password"
                  name="confirmPassword"
                  className="w-full bg-transparent outline-0 ui-text-medium text-text-primary placeholder:text-text-disabled caret-text-primary"
                />
                <i className="ab-icon ab-hidden ml-150 text-size-800 md:hover:cursor-pointer" />
              </label>
            </div>

            {/* ============================== */}
            {/* SUBMIT BUTTON */}
            {/* ============================== */}
            <div className="mt-400">
              <button
                type="submit"
                className="relative ab-btn ab-btn-primary ab-btn-size-regular w-full"
                disabled
              >
                <span className="button-text-large ab-btn-label">Confirm</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
