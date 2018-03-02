// @flow

/**
 * TODO: Establish a new resources spec for SVG logos used in kernel "cards".
 *
 * Description: At some point I'd like to push forward a spec for a ~1:1.4142
 * ratio (1:√2) notebook card for the selection screen (on nteract and
 * jupyterlab). For now I'll hardcode some React svg versions for kernels in
 * common use across the ~~USS~~ enterprise.
 *
 * Implemented:
 *
 *  - Python
 *  - Scala
 *
 * Needed:
 *
 *  - R
 *  - Node.js
 *
 * The easy solution to getting another kernel supported (instead of the fallback)
 * is to add another logo in a PR. 🎉
 */

export const PythonLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="110.4211"
    height="109.8461"
    version="1"
  >
    <g color="#000">
      <path
        style={{ marker: "none" }}
        d="M99.75 67.46875C71.718268 67.468752 73.46875 79.625 73.46875 79.625L73.5 92.21875h26.75V96H62.875s-17.9375-2.034276-17.9375 26.25c-.000002 28.28427 15.65625 27.28125 15.65625 27.28125h9.34375v-13.125S69.433848 120.75 85.34375 120.75H111.875s14.90625.24096 14.90625-14.40625V82.125c0-.000002 2.26318-14.65625-27.03125-14.65625zM85 75.9375c2.661429-.000002 4.8125 2.151071 4.8125 4.8125.000002 2.661429-2.151071 4.8125-4.8125 4.8125-2.661429.000002-4.8125-2.151071-4.8125-4.8125-.000002-2.661429 2.151071-4.8125 4.8125-4.8125z"
        overflow="visible"
        transform="translate(-44.9375 -67.46875)"
        fill="currentColor"
        fillOpacity="0.7"
        // fill="#ffe052"
      />
      <path
        style={{ marker: "none" }}
        d="M100.5461 177.31485c28.03174 0 26.28125-12.15625 26.28125-12.15625l-.03125-12.59375h-26.75v-3.78125h37.375s17.9375 2.03427 17.9375-26.25001c.00001-28.284267-15.65625-27.281247-15.65625-27.281247h-9.34375v13.124997s.50366 15.65625-15.40625 15.65625H88.421098s-14.90625-.24096-14.90625 14.40626v24.21875s-2.26318 14.65625 27.031252 14.65625zm14.75-8.46875c-2.66143 0-4.8125-2.15107-4.8125-4.8125s2.15107-4.8125 4.8125-4.8125 4.8125 2.15107 4.8125 4.8125c.00001 2.66143-2.15107 4.8125-4.8125 4.8125z"
        overflow="visible"
        transform="translate(-44.9375 -67.46875)"
        fill="currentColor"
        // fill="#387eb8"
      />
    </g>
  </svg>
);

export const ScalaLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin meet"
    viewBox="0 0 256 416"
    height="120"
  >
    <path
      fill="currentColor"
      fillOpacity="0.5"
      d="M0 288v-32c0-5.394 116.377-14.428 192.2-32 36.628 8.49 63.8 18.969 63.8 32v32c0 13.024-27.172 23.51-63.8 32C116.376 302.425 0 293.39 0 288"
      transform="matrix(1 0 0 -1 0 544)"
    />
    <path
      fill="currentColor"
      fillOpacity="0.5"
      d="M0 160v-32c0-5.394 116.377-14.428 192.2-32 36.628 8.49 63.8 18.969 63.8 32v32c0 13.024-27.172 23.51-63.8 32C116.376 174.425 0 165.39 0 160"
      transform="matrix(1 0 0 -1 0 288)"
    />
    <path
      fill="currentColor"
      d="M0 224v-96c0 8 256 24 256 64v96c0-40-256-56-256-64"
      transform="matrix(1 0 0 -1 0 416)"
    />
    <path
      fill="currentColor"
      d="M0 96V0c0 8 256 24 256 64v96c0-40-256-56-256-64"
      transform="matrix(1 0 0 -1 0 160)"
    />
    <path
      fill="currentColor"
      d="M0 352v-96c0 8 256 24 256 64v96c0-40-256-56-256-64"
      transform="matrix(1 0 0 -1 0 672)"
    />
  </svg>
);

/**
 * maps kernelspec.language -> logo
 */
export const builtins = {
  scala: ScalaLogo,
  python: PythonLogo
};
