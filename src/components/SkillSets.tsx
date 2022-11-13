import { Progress } from 'antd';
import '../styles/skillSets.css';
import 'antd/dist/antd.css';

type Skill = {
  name: string;
  innerHTML: React.ReactNode;
  level: number;
  style?: React.CSSProperties;
};

export const SkillSets: React.FC = () => {
  const skills: Skill[] = [
    // 言語
    {
      name: 'Go',
      innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" aria-label="Go" role="img" viewBox="0 0 512 512" > <rect rx="15%" fill="#fff"></rect> <path fill="#00acd7" d="M308 220c1 2-1 2-2 2l-34 9c-3 2-5-1-5-1-21-26-65-8-67 30-2 36 45 50 67 14h-38c-3 0-8-1-3-10l8-17c2-4 3-4 9-4h70c0 81-90 117-138 68-22-23-29-75 16-112 36-29 96-29 117 21m16 96c-45-39-21-120 50-133 73-13 105 55 76 106-24 43-88 61-126 27m94-51c9-25-9-49-36-47-30 3-51 42-32 65 19 22 58 12 68-18m-321-2v-1l2-5 2-1h41l1 1-1 5-1 1H97m-48-18s-2 0-1-1l4-6 2-1h92l1 1-2 5-1 1-95 1m30-19l-1-1 5-5 2-1h72v1l-3 5-2 1H79" ></path> </svg>`,
      level: 60,
      style: { margin: 10 },
    },
    {
      name: 'Ruby',
      innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" aria-label="Ruby" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#fff"></rect><path d="m407.7 397.3 20.9-257.7-80.6 157.4-196 118c80.9-5.7 171.2-11.9 255.7-17.7z" fill="#a00403"></path><path d="m423.4 179-103.4-81-27 93c109.8 9.3 91.8-9.6 130.4-12zm-231.4 103 136 43-35-134zm-89 19c44 139 55 169 89-19l-90 21zm173-233 97 1-53 29c-11-7-36-24-44-30zm-191 178-4 99 23-43zm213-161c26 26-1 89-53 140s-118 83-144 57c-25-25.9 0.7-90 52.9-141s119.2-82 144.2-56z" fill="#b11205"></path><path d="m192 282 133 43c-48 45-137.5 86.5-173 90z" fill="#9f0d02"></path><path d="m293 191 33 133c40-42 76-88 94-144zm114.7 206.3-20.7-152.3-61 79z" fill="#891102"></path><path d="m421 181c13-41 16-101-48-112l-53 29z" fill="#aa1401"></path><path d="m81 345c2 68 50 69 71 70l-49-113z" fill="#9e1209"></path><path d="m192 282 54 103c32-17 57-38 79-61z" fill="#900e04"></path><path d="m103 302-8 91c14 20 34 21 55 20-15-37-45-112-47-111z" fill="#8b1104"></path></svg>`,
      level: 40,
      style: { margin: 20 },
    },
    {
      name: 'TypeScript',
      innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" aria-label="TypeScript" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#3178c6"></rect><path fill="#fff" d="m233 284h64V243H118v41h64v183h51zm84 173c18.03 9.21 42.31 12.5 64 12.5 18.7 0 42.93-2.43 62-14.4 8.1-5.3 15-12 19-21s7.1-19 7.1-32c-.09-41.15-29.29-54.79-58.1-68-13.08-5.95-42.5-15.56-42.5-34.1 0-14.94 16.81-22.53 38.2-22.6 16.68 0 39.1 5.43 53 15.64v-47c-18.77-7.21-38.44-8.56-56-8.6-49.25 0-87.66 20.32-88 66.8.49 35.11 21.32 50.44 52 65 16.71 7.56 47.57 17.24 47.8 38.2-.73 19.57-24.58 22.55-38.4 22.7-21.56 0-44.36-8.19-60.1-21.14z"></path></svg>`,
      level: 30,
      style: { margin: 30 },
    },
    {
      name: 'Python',
      innerHTML: `<svg viewBox="0 0 256 255" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="12.9593594%" y1="12.0393928%" x2="79.6388325%" y2="78.2008538%" id="linearGradient-1"><stop stop-color="#387EB8" offset="0%"></stop><stop stop-color="#366994" offset="100%"></stop></linearGradient><linearGradient x1="19.127525%" y1="20.5791813%" x2="90.7415328%" y2="88.4290372%" id="linearGradient-2"><stop stop-color="#FFE052" offset="0%"></stop><stop stop-color="#FFC331" offset="100%"></stop></linearGradient></defs><g><path d="M126.915866,0.0722755491 C62.0835831,0.0722801733 66.1321288,28.1874648 66.1321288,28.1874648 L66.2044043,57.3145115 L128.072276,57.3145115 L128.072276,66.0598532 L41.6307171,66.0598532 C41.6307171,66.0598532 0.144551098,61.3549438 0.144551098,126.771315 C0.144546474,192.187673 36.3546019,189.867871 36.3546019,189.867871 L57.9649915,189.867871 L57.9649915,159.51214 C57.9649915,159.51214 56.8001363,123.302089 93.5968379,123.302089 L154.95878,123.302089 C154.95878,123.302089 189.434218,123.859386 189.434218,89.9830604 L189.434218,33.9695088 C189.434218,33.9695041 194.668541,0.0722755491 126.915866,0.0722755491 L126.915866,0.0722755491 L126.915866,0.0722755491 Z M92.8018069,19.6589497 C98.9572068,19.6589452 103.932242,24.6339846 103.932242,30.7893845 C103.932246,36.9447844 98.9572068,41.9198193 92.8018069,41.9198193 C86.646407,41.9198239 81.6713721,36.9447844 81.6713721,30.7893845 C81.6713674,24.6339846 86.646407,19.6589497 92.8018069,19.6589497 L92.8018069,19.6589497 L92.8018069,19.6589497 Z" fill="url(#linearGradient-1)"></path><path d="M128.757101,254.126271 C193.589403,254.126271 189.540839,226.011081 189.540839,226.011081 L189.468564,196.884035 L127.600692,196.884035 L127.600692,188.138693 L214.042251,188.138693 C214.042251,188.138693 255.528417,192.843589 255.528417,127.427208 C255.52844,62.0108566 219.318366,64.3306589 219.318366,64.3306589 L197.707976,64.3306589 L197.707976,94.6863832 C197.707976,94.6863832 198.87285,130.896434 162.07613,130.896434 L100.714182,130.896434 C100.714182,130.896434 66.238745,130.339138 66.238745,164.215486 L66.238745,220.229038 C66.238745,220.229038 61.0044225,254.126271 128.757101,254.126271 L128.757101,254.126271 L128.757101,254.126271 Z M162.87116,234.539597 C156.715759,234.539597 151.740726,229.564564 151.740726,223.409162 C151.740726,217.253759 156.715759,212.278727 162.87116,212.278727 C169.026563,212.278727 174.001595,217.253759 174.001595,223.409162 C174.001618,229.564564 169.026563,234.539597 162.87116,234.539597 L162.87116,234.539597 L162.87116,234.539597 Z" fill="url(#linearGradient-2)"></path></g></svg>`,
      level: 10,
      style: { margin: 30 },
    },
    {
      name: 'PHP',
      innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-label="PHP" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#777bb3"></rect><g stroke="#fff" stroke-width="6"><path id="a" d="M155 202H97a3 3 0 0 0-3 2L67 345c0 3 3 3 3 3h30c3 0 3-2 3-2l7-35h27c42 0 63-28 68-53s1-56-50-56zm13 54c-4 19-17 27-35 27h-18l11-53h18c27 0 26 10 24 26z"></path><path d="M275 311c-4 0-3-4-3-4l12-61c0-8 6-16-18-15h-18l-15 78s0 3-4 3h-29c-3 0-3-3-3-3l28-141s0-2 4-2h30c3 0 2 3 2 3l-7 34h26c36 0 45 17 42 37l-13 69s0 3-5 3z"></path><use xlink:href="#a" x="239"></use></g></svg>`,
      level: 10,
      style: { margin: 30 },
    },

    // ライブラリ・FW
    {
      name: 'Ruby on Rails',
      innerHTML: `<svg viewBox="0 0 512 180" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g fill="#CC0000"><path d="M219.115365,150.633753 C219.115365,150.633753 241.684635,148.699244 241.684635,119.552645 C241.684635,90.4060453 214.343577,87.697733 214.343577,87.697733 L165.078086,87.697733 L165.078086,179.651385 L189.839798,179.651385 L189.839798,157.469018 L211.248363,179.651385 L247.875063,179.651385 L219.115365,150.633753 Z M209.571788,131.804534 L189.839798,131.804534 L189.839798,110.782872 L209.700756,110.782872 C209.700756,110.782872 215.246348,112.846348 215.246348,121.229219 C215.246348,129.612091 209.571788,131.804534 209.571788,131.804534 Z M302.815113,88.3425693 L277.666499,88.3425693 C259.74005,88.3425693 253.678589,104.592443 253.678589,112.330479 L253.678589,179.651385 L278.827204,179.651385 L278.827204,163.530479 L302.428212,163.530479 L302.428212,179.651385 L326.803023,179.651385 L326.803023,112.330479 C326.803023,92.7274559 309.005542,88.3425693 302.815113,88.3425693 Z M302.428212,137.479093 L278.698237,137.479093 L278.698237,115.167758 C278.698237,115.167758 278.698237,110.138035 286.565239,110.138035 L295.206045,110.138035 C302.170277,110.138035 302.299244,115.167758 302.299244,115.167758 L302.299244,137.479093 L302.428212,137.479093 Z M338.281108,88.3425693 L364.461461,88.3425693 L364.461461,179.651385 L338.281108,179.651385 L338.281108,88.3425693 Z M401.217128,156.050378 L401.217128,88.3425693 L375.165743,88.3425693 L375.165743,156.050378 L375.165743,179.651385 L401.217128,179.651385 L436.425189,179.651385 L436.425189,156.050378 L401.217128,156.050378 Z M445.065995,156.308312 L445.065995,179.651385 L487.238287,179.651385 C495.879093,179.651385 510.710327,173.33199 511.226196,155.663476 L511.226196,146.635768 C511.226196,131.546599 498.84534,122.647859 487.238287,122.647859 L466.216625,122.647859 L466.216625,111.81461 L507.873048,111.81461 L507.873048,88.3425693 L467.893199,88.3425693 C457.575819,88.3425693 443.776322,96.8544081 443.776322,112.71738 L443.776322,120.842317 C443.776322,136.70529 457.446851,144.830227 467.893199,144.830227 C496.910831,144.959194 460.928967,144.830227 487.754156,144.830227 L487.754156,156.179345 L445.065995,156.308312 Z"></path><path d="M9.02770781,179.522418 L110.911839,179.522418 C110.911839,179.522418 91.4377834,90.6639798 155.921411,54.6821159 C169.978841,47.8468514 214.730479,22.311335 287.983879,76.4775819 C290.30529,74.543073 292.497733,72.995466 292.497733,72.995466 C292.497733,72.995466 225.434761,6.06146096 150.76272,13.5415617 C113.233249,16.8947103 67.0629723,51.0710327 39.9798489,96.2095718 C12.8967254,141.348111 9.02770781,179.522418 9.02770781,179.522418 Z M221.307809,20.763728 L221.823678,12.1229219 C220.662972,11.4780856 217.438791,9.93047859 209.313854,7.60906801 L208.797985,16.1209068 C213.053904,17.5395466 217.180856,19.0871537 221.307809,20.763728 Z M209.055919,48.1047859 L208.54005,56.2297229 C212.79597,56.3586902 217.051889,56.8745592 221.307809,57.77733 L221.823678,49.7813602 C217.438791,48.8785894 213.182872,48.3627204 209.055919,48.1047859 Z M161.338035,7.86700252 L162.627708,7.86700252 L160.048363,-7.10542736e-15 C156.050378,-7.10542736e-15 151.923426,0.257934509 147.667506,0.773803526 L150.117884,8.38287154 C153.857935,7.99596977 157.597985,7.86700252 161.338035,7.86700252 Z M167.528463,55.3269521 L170.49471,64.2256927 C174.234761,62.4201511 177.974811,60.8725441 181.714861,59.7118388 L178.877582,51.2 C174.492695,52.4896725 170.752645,53.9083123 167.528463,55.3269521 Z M108.97733,21.4085642 L103.173804,12.5098237 C99.9496222,14.186398 96.5964736,15.9919395 93.1143577,18.0554156 L99.0468514,27.0831234 C102.4,25.0196474 105.624181,23.0851385 108.97733,21.4085642 Z M135.415617,79.4438287 L141.606045,88.729471 C143.798489,85.5052897 146.377834,82.5390428 149.215113,79.572796 L143.411587,70.8030227 C140.44534,73.511335 137.737028,76.4775819 135.415617,79.4438287 Z M116.715365,120.971285 L127.161713,129.225189 C127.677582,124.195466 128.580353,119.165743 129.870025,114.13602 L120.584383,106.784887 C118.907809,111.556675 117.747103,116.328463 116.715365,120.971285 Z M60.2277078,59.7118388 L51.0710327,51.715869 C47.7178841,54.9400504 44.4937028,58.1642317 41.5274559,61.3884131 L51.4579345,69.9002519 C54.1662469,66.418136 57.1324937,62.9360202 60.2277078,59.7118388 Z M21.279597,117.360202 L6.44836272,111.943577 C3.99798489,117.489169 1.28967254,123.937531 0,127.419647 L14.8312343,132.836272 C16.5078086,128.451385 19.2161209,122.13199 21.279597,117.360202 Z M114.780856,153.728967 C115.038791,160.564232 115.683627,166.109824 116.328463,169.978841 L131.804534,175.524433 C130.643829,170.49471 129.483123,164.820151 128.70932,158.75869 L114.780856,153.728967 Z"></path></g></svg>`,
      level: 30,
      style: { margin: 20 },
    },
    {
      name: 'React',
      innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" aria-label="React" role="img" viewBox="0 0 512 512"><rect rx="15%" fill="#fff"></rect><circle cx="256" cy="256" r="36" fill="#61dafb"></circle><path stroke="#61dafb" stroke-width="18" fill="none" d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"></path></svg>`,
      level: 40,
      style: { margin: 15 },
    },
    {
      name: 'Vue',
      innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" aria-label="Vue" role="img" viewBox="0 0 512 512"><rect rx="15%" fill="#fff"></rect><path fill="#42b883" d="m64 140h148l44 77l44-77h148L256 473"></path><path fill="#35495e" d="m141 140h71l44 77l44-77h71L256 340"></path></svg>`,
      level: 40,
      style: { margin: 15 },
    },

    // インフラ・ミドルウェア
    {
      name: 'PostgreSQL',
      innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M85.988 76.075c.632-5.262.443-6.034 4.362-5.182l.995.088c3.014.137 6.957-.485 9.272-1.561 4.986-2.313 7.942-6.177 3.026-5.162-11.215 2.313-11.986-1.483-11.986-1.483C103.5 45.204 108.451 22.9 104.178 17.44 92.524 2.548 72.35 9.59 72.012 9.773l-.108.021c-2.216-.461-4.695-.735-7.481-.78-5.075-.083-8.926 1.331-11.847 3.546 0 0-35.989-14.827-34.315 18.646.356 7.121 10.207 53.882 21.956 39.758 4.294-5.164 8.444-9.531 8.444-9.531 2.061 1.369 4.528 2.067 7.116 1.816l.2-.17c-.062.641-.035 1.268.081 2.01-3.027 3.383-2.137 3.977-8.189 5.222-6.122 1.262-2.525 3.508-.178 4.095 2.848.713 9.433 1.722 13.884-4.509l-.177.711c1.188.95 1.107 6.827 1.275 11.026.168 4.199.45 8.117 1.306 10.429.856 2.31 1.866 8.261 9.819 6.557 6.646-1.426 11.727-3.476 12.19-22.545"></path><path d="M71.208 102.77c-3.518 0-5.808-1.36-7.2-2.674-2.1-1.981-2.933-4.534-3.43-6.059l-.215-.637c-1.002-2.705-1.341-6.599-1.542-11.613a199.25 199.25 0 01-.075-2.352c-.017-.601-.038-1.355-.068-2.146a15.157 15.157 0 01-3.997 1.264c-2.48.424-5.146.286-7.926-.409-1.961-.49-3.999-1.506-5.16-3.076-3.385 2.965-6.614 2.562-8.373 1.976-3.103-1.035-5.88-3.942-8.491-8.89-1.859-3.523-3.658-8.115-5.347-13.646-2.94-9.633-4.808-19.779-4.974-23.109-.522-10.427 2.284-17.883 8.34-22.16 9.555-6.749 24.03-2.781 29.307-.979 3.545-2.137 7.716-3.178 12.43-3.102 2.532.041 4.942.264 7.181.662 2.335-.734 6.949-1.788 12.23-1.723 9.73.116 17.793 3.908 23.316 10.966 3.941 5.036 1.993 15.61.48 21.466-2.127 8.235-5.856 16.996-10.436 24.622 1.244.009 3.045-.141 5.607-.669 5.054-1.044 6.531 1.666 6.932 2.879 1.607 4.867-5.378 8.544-7.557 9.555-2.792 1.297-7.343 2.086-11.071 1.915l-.163-.011-.979-.086-.097.816-.093.799c-.25 9.664-1.631 15.784-4.472 19.829-2.977 4.239-7.116 5.428-10.761 6.209a16.146 16.146 0 01-3.396.383zm-7.402-35.174c2.271 1.817 2.47 5.236 2.647 11.626.022.797.043 1.552.071 2.257.086 2.134.287 7.132 1.069 9.244.111.298.21.602.314.922.872 2.672 1.31 4.011 5.081 3.203 3.167-.678 4.794-1.287 6.068-3.101 1.852-2.638 2.888-7.941 3.078-15.767l3.852.094-3.826-.459.112-.955c.367-3.148.631-5.424 2.736-6.928 1.688-1.207 3.613-1.09 5.146-.814-1.684-1.271-2.15-2.765-2.274-3.377l-.321-1.582.902-1.34c5.2-7.716 9.489-17.199 11.767-26.018 2.34-9.062 1.626-13.875.913-14.785-9.446-12.071-25.829-7.088-27.539-6.521l-.29.156-1.45.271-.743-.154c-2.047-.425-4.321-.66-6.76-.7-3.831-.064-6.921.841-9.455 2.764l-1.758 1.333-2.041-.841c-4.358-1.782-17.162-5.365-23.918-.58-3.75 2.656-5.458 7.861-5.078 15.47.125 2.512 1.833 12.021 4.647 21.245 3.891 12.746 7.427 16.979 8.903 17.472.257.087.926-.433 1.591-1.231 4.326-5.203 8.44-9.54 8.613-9.723l2.231-2.347 2.697 1.792c1.087.723 2.286 1.132 3.518 1.209l6.433-5.486-.932 9.51c-.021.214-.031.504.053 1.044l.28 1.803-1.213 1.358-.14.157 3.534 1.632 1.482-1.853z"></path><path fill="#336791" d="M103.646 64.258c-11.216 2.313-11.987-1.484-11.987-1.484 11.842-17.571 16.792-39.876 12.52-45.335C92.524 2.547 72.35 9.59 72.013 9.773l-.109.019c-2.216-.459-4.695-.733-7.482-.778-5.075-.083-8.925 1.33-11.846 3.545 0 0-35.99-14.826-34.316 18.647.356 7.121 10.207 53.882 21.956 39.758 4.294-5.164 8.443-9.531 8.443-9.531 2.061 1.369 4.528 2.067 7.115 1.816l.201-.17c-.062.641-.034 1.268.08 2.01-3.026 3.383-2.138 3.977-8.188 5.222-6.123 1.262-2.526 3.508-.177 4.095 2.847.713 9.433 1.722 13.883-4.509l-.178.711c1.186.95 2.019 6.179 1.879 10.919s-.233 7.994.702 10.536c.935 2.541 1.866 8.261 9.82 6.557 6.646-1.425 10.09-5.116 10.57-11.272.34-4.377 1.109-3.73 1.158-7.644l.618-1.853c.711-5.934.113-7.848 4.208-6.957l.995.087c3.014.138 6.958-.485 9.273-1.561 4.986-2.314 7.943-6.177 3.028-5.162z"></path><path fill="#fff" d="M71.61 100.394c-6.631.001-8.731-5.25-9.591-7.397-1.257-3.146-1.529-15.358-1.249-25.373a1.286 1.286 0 012.57.072c-.323 11.551.136 22.018 1.066 24.346 1.453 3.632 3.656 6.809 9.887 5.475 5.915-1.269 8.13-3.512 9.116-9.23.758-4.389 2.254-16.874 2.438-19.338a1.285 1.285 0 012.563.191c-.192 2.564-1.682 15.026-2.469 19.584-1.165 6.755-4.176 9.819-11.11 11.306a15.462 15.462 0 01-3.221.364zM35.659 74.749a5.343 5.343 0 01-1.704-.281c-4.307-1.437-8.409-8.451-12.193-20.849-2.88-9.438-4.705-19.288-4.865-22.489-.475-9.49 1.97-16.205 7.265-19.957 10.476-7.423 28.1-.354 28.845-.05a1.285 1.285 0 01-.972 2.379v.001c-.17-.07-17.07-6.84-26.392-.229-4.528 3.211-6.607 9.175-6.18 17.729.135 2.696 1.84 12.311 4.757 21.867 3.378 11.067 7.223 18.052 10.548 19.16.521.175 2.109.704 4.381-2.026 4.272-5.14 8.197-9.242 8.236-9.283a1.286 1.286 0 011.856 1.778c-.039.04-3.904 4.081-8.116 9.148-1.995 2.398-3.908 3.102-5.466 3.102zm55.92-10.829a1.284 1.284 0 01-1.065-2.004c11.971-17.764 16.173-39.227 12.574-43.825-4.53-5.788-10.927-8.812-19.012-8.985-5.987-.13-10.746 1.399-11.523 1.666l-.195.079c-.782.246-1.382-.183-1.608-.684a1.29 1.29 0 01.508-1.631l.346-.142-.017.005.018-.006c1.321-.483 6.152-1.933 12.137-1.864 8.947.094 16.337 3.545 21.371 9.977 2.382 3.044 2.387 10.057.015 19.24-2.418 9.362-6.968 19.425-12.482 27.607a1.282 1.282 0 01-1.067.567zm.611 8.223c-2.044 0-3.876-.287-4.973-.945-1.128-.675-1.343-1.594-1.371-2.081-.308-5.404 2.674-6.345 4.195-6.774-.212-.32-.514-.697-.825-1.086-.887-1.108-2.101-2.626-3.037-4.896-.146-.354-.606-1.179-1.138-2.133-2.883-5.169-8.881-15.926-5.028-21.435 1.784-2.549 5.334-3.552 10.566-2.992-1.539-4.689-8.869-19.358-26.259-19.643-5.231-.088-9.521 1.521-12.744 4.775-7.217 7.289-6.955 20.477-6.952 20.608a1.284 1.284 0 11-2.569.067c-.016-.585-.286-14.424 7.695-22.484 3.735-3.772 8.651-5.634 14.612-5.537C75.49 7.77 82.651 13.426 86.7 18.14c4.412 5.136 6.576 10.802 6.754 12.692.133 1.406-.876 1.688-1.08 1.729l-.463.011c-5.135-.822-8.429-.252-9.791 1.695-2.931 4.188 2.743 14.363 5.166 18.709.619 1.108 1.065 1.909 1.269 2.404.796 1.93 1.834 3.227 2.668 4.269.733.917 1.369 1.711 1.597 2.645.105.185 1.603 2.399 10.488.565 2.227-.459 3.562-.066 3.97 1.168.803 2.429-3.702 5.261-6.196 6.42-2.238 1.039-5.805 1.696-8.892 1.696zm-3.781-3.238c.281.285 1.691.775 4.612.65 2.596-.112 5.335-.677 6.979-1.439 2.102-.976 3.504-2.067 4.231-2.812l-.404.074c-5.681 1.173-9.699 1.017-11.942-.465a4.821 4.821 0 01-.435-.323c-.243.096-.468.159-.628.204-1.273.357-2.589.726-2.413 4.111zm-36.697 7.179c-1.411 0-2.896-.191-4.413-.572-1.571-.393-4.221-1.576-4.18-3.519.045-2.181 3.216-2.835 4.411-3.081 4.312-.888 4.593-1.244 5.941-2.955.393-.499.882-1.12 1.548-1.865.99-1.107 2.072-1.669 3.216-1.669.796 0 1.45.271 1.881.449 1.376.57 2.524 1.948 2.996 3.598.426 1.488.223 2.92-.572 4.032-2.608 3.653-6.352 5.582-10.828 5.582zm-5.817-3.98c.388.299 1.164.699 2.027.916 1.314.328 2.588.495 3.79.495 3.662 0 6.601-1.517 8.737-4.506.445-.624.312-1.415.193-1.832-.25-.872-.87-1.665-1.509-1.931-.347-.144-.634-.254-.898-.254-.142 0-.573 0-1.3.813-.614.686-1.055 1.246-1.446 1.741-1.678 2.131-2.447 2.854-7.441 3.883-1.218.252-1.843.506-2.153.675zm9.882-5.928a1.286 1.286 0 01-1.269-1.09 6.026 6.026 0 01-.064-.644c-3.274-.062-6.432-1.466-8.829-3.968-3.031-3.163-4.411-7.545-3.785-12.022.68-4.862.426-9.154.289-11.46a25.514 25.514 0 01-.063-1.425c.002-.406.01-1.485 3.615-3.312 1.282-.65 3.853-1.784 6.661-2.075 4.654-.48 7.721 1.592 8.639 5.836 2.478 11.46.196 16.529-1.47 20.23-.311.688-.604 1.34-.838 1.97l-.207.557c-.88 2.36-1.641 4.399-1.407 5.923a1.287 1.287 0 01-1.075 1.466l-.197.014zM44.634 35.922l.051.918c.142 2.395.406 6.853-.31 11.969-.516 3.692.612 7.297 3.095 9.888 1.962 2.048 4.546 3.178 7.201 3.178h.055c.298-1.253.791-2.575 1.322-4l.206-.553c.265-.712.575-1.401.903-2.13 1.604-3.564 3.6-8 1.301-18.633-.456-2.105-1.56-3.324-3.375-3.726-3.728-.824-9.283 1.98-10.449 3.089zm7.756-.545c-.064.454.833 1.667 2.001 1.829 1.167.163 2.166-.785 2.229-1.239.063-.455-.833-.955-2.002-1.118-1.167-.163-2.166.073-2.228.528zm2.27 2.277l-.328-.023c-.725-.101-1.458-.558-1.959-1.223-.176-.233-.464-.687-.407-1.091.082-.593.804-.947 1.933-.947.253 0 .515.019.78.055.616.086 1.189.264 1.612.5.733.41.787.866.754 1.103-.091.653-1.133 1.626-2.385 1.626zm-1.844-2.201c.037.28.73 1.205 1.634 1.33l.209.015c.834 0 1.458-.657 1.531-.872-.077-.146-.613-.511-1.631-.651a4.72 4.72 0 00-.661-.048c-.652-.001-1.001.146-1.082.226zm35.121-1.003c.063.455-.832 1.668-2.001 1.83-1.168.162-2.167-.785-2.231-1.24-.062-.454.834-.955 2.002-1.117 1.168-.164 2.166.074 2.23.527zm-2.27 2.062c-1.125 0-2.094-.875-2.174-1.442-.092-.681 1.029-1.199 2.185-1.359.254-.036.506-.054.749-.054.997 0 1.657.293 1.723.764.043.306-.191.777-.595 1.201-.266.28-.826.765-1.588.87l-.3.02zm.759-2.427c-.223 0-.455.017-.69.049-1.162.161-1.853.628-1.82.878.039.274.78 1.072 1.75 1.072l.239-.017c.634-.089 1.11-.502 1.337-.741.356-.375.498-.727.481-.848-.021-.157-.449-.393-1.297-.393zm3.194 26.453a1.285 1.285 0 01-1.067-2c2.736-4.087 2.235-8.256 1.751-12.286-.207-1.718-.42-3.493-.364-5.198.056-1.753.278-3.199.494-4.599.255-1.657.496-3.224.396-5.082a1.286 1.286 0 012.567-.138c.114 2.124-.159 3.896-.423 5.611-.204 1.323-.415 2.691-.466 4.29-.049 1.509.144 3.112.348 4.808.516 4.287 1.099 9.146-2.167 14.023-.248.37-.655.571-1.069.571z"></path><path d="M2.835 103.184a26.23 26.23 0 014.343-.338c2.235 0 3.874.52 4.914 1.456.962.832 1.534 2.106 1.534 3.667 0 1.586-.469 2.834-1.353 3.744-1.196 1.274-3.146 1.924-5.356 1.924-.676 0-1.3-.026-1.819-.156v7.021H2.835v-17.318zm2.263 8.45c.494.13 1.118.182 1.872.182 2.729 0 4.394-1.326 4.394-3.744 0-2.314-1.638-3.432-4.134-3.432-.988 0-1.742.078-2.132.182v6.812zm22.23 2.47c0 4.654-3.225 6.683-6.267 6.683-3.406 0-6.032-2.496-6.032-6.475 0-4.212 2.756-6.682 6.24-6.682 3.615-.001 6.059 2.626 6.059 6.474zm-9.984.13c0 2.756 1.586 4.836 3.822 4.836 2.184 0 3.821-2.054 3.821-4.888 0-2.132-1.065-4.836-3.77-4.836s-3.873 2.496-3.873 4.888zm12.557 3.926c.676.442 1.872.91 3.016.91 1.664 0 2.444-.832 2.444-1.872 0-1.092-.649-1.69-2.34-2.314-2.262-.806-3.328-2.054-3.328-3.562 0-2.028 1.638-3.692 4.342-3.692 1.274 0 2.393.364 3.095.78l-.572 1.664a4.897 4.897 0 00-2.574-.728c-1.352 0-2.106.78-2.106 1.716 0 1.04.755 1.508 2.393 2.132 2.184.832 3.302 1.924 3.302 3.796 0 2.21-1.716 3.77-4.706 3.77-1.378 0-2.652-.338-3.536-.858l.57-1.742zm13.365-13.859v3.614h3.275v1.742h-3.275v6.786c0 1.56.441 2.444 1.716 2.444a5.09 5.09 0 001.326-.156l.104 1.716c-.441.182-1.144.312-2.027.312-1.066 0-1.925-.338-2.471-.962-.649-.676-.884-1.794-.884-3.276v-6.864h-1.95v-1.742h1.95v-3.016l2.236-.598zm16.536 3.615c-.053.91-.104 1.924-.104 3.458v7.306c0 2.886-.572 4.654-1.794 5.747-1.222 1.144-2.99 1.508-4.576 1.508-1.508 0-3.172-.364-4.187-1.04l.572-1.742c.832.52 2.132.988 3.692.988 2.34 0 4.056-1.222 4.056-4.394v-1.404h-.052c-.702 1.17-2.054 2.106-4.004 2.106-3.12 0-5.356-2.652-5.356-6.137 0-4.264 2.782-6.682 5.668-6.682 2.185 0 3.381 1.144 3.927 2.184h.052l.104-1.898h2.002zm-2.366 4.966c0-.39-.026-.728-.13-1.04-.416-1.326-1.534-2.418-3.198-2.418-2.185 0-3.744 1.846-3.744 4.758 0 2.47 1.248 4.524 3.718 4.524 1.404 0 2.678-.884 3.172-2.34.13-.39.183-.832.183-1.222v-2.262zm5.901-1.04c0-1.482-.026-2.756-.104-3.926h2.003l.077 2.47h.104c.572-1.69 1.95-2.756 3.484-2.756.26 0 .441.026.649.078v2.158a3.428 3.428 0 00-.779-.078c-1.612 0-2.757 1.222-3.068 2.938a6.44 6.44 0 00-.104 1.066v6.708h-2.262v-8.658zm9.517 2.782c.052 3.094 2.027 4.368 4.315 4.368 1.639 0 2.626-.286 3.484-.65l.39 1.638c-.806.364-2.184.78-4.186.78-3.874 0-6.188-2.548-6.188-6.344 0-3.796 2.236-6.787 5.902-6.787 4.108 0 5.2 3.614 5.2 5.928 0 .468-.052.832-.078 1.066h-8.839zm6.708-1.638c.025-1.456-.599-3.718-3.172-3.718-2.314 0-3.328 2.132-3.511 3.718h6.683z"></path><path fill="#336791" d="M84.371 117.744a8.016 8.016 0 004.056 1.144c2.314 0 3.666-1.222 3.666-2.99 0-1.638-.936-2.574-3.302-3.484-2.86-1.014-4.628-2.496-4.628-4.966 0-2.73 2.262-4.758 5.668-4.758 1.794 0 3.094.416 3.874.858l-.624 1.846a6.98 6.98 0 00-3.328-.832c-2.392 0-3.302 1.43-3.302 2.626 0 1.638 1.065 2.444 3.484 3.38 2.964 1.145 4.472 2.574 4.472 5.148 0 2.704-2.002 5.044-6.136 5.044-1.69 0-3.536-.494-4.473-1.118l.573-1.898zm27.586 5.33a94.846 94.846 0 01-6.708-2.028c-.364-.13-.728-.26-1.066-.26-4.16-.156-7.722-3.224-7.722-8.866 0-5.616 3.432-9.23 8.164-9.23 4.758 0 7.853 3.692 7.853 8.866 0 4.498-2.08 7.384-4.992 8.398v.104c1.742.442 3.64.858 5.122 1.118l-.651 1.898zm-1.872-11.414c0-3.51-1.819-7.125-5.538-7.125-3.822 0-5.694 3.536-5.668 7.333-.026 3.718 2.028 7.072 5.564 7.072 3.615 0 5.642-3.276 5.642-7.28zm5.329-8.684h2.263v15.626h7.488v1.898h-9.751v-17.524z"></path></svg>`,
      level: 50,
      style: { margin: 30 },
    },
    {
      name: 'Terraform',
      innerHTML: `<svg viewBox="0 0 256 291" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g><polygon fill="#4040B2" points="176.485057 188.994162 256.000302 143.127442 256.000302 51.2485453 176.485057 97.2122358"></polygon><path d="M88.2425283,51.2485453 L167.757774,97.2122358 L167.757774,188.994162 L88.2425283,143.078957 M0,91.8304113 L79.5152453,137.745617 L79.5152453,45.9152057 L0,0 M88.2425283,244.994228 L167.757774,290.909434 L167.757774,199.079023 L88.2425283,153.163817" fill="#5C4EE5"></path></g></svg>`,
      level: 50,
      style: { margin: 30 },
    },
    {
      name: 'Google Cloud',
      innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#ea4535" d="M80.6 40.3h.4l-.2-.2 14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5C36.5 20.8 24.9 32.8 20.7 48c.2-.1.5-.2.8-.2 5.2-3.4 11.4-5.4 17.9-5.4 2.2 0 4.3.2 6.4.6.1-.1.2-.1.3-.1 9-9.9 24.2-11.1 34.6-2.6h-.1z"></path><path fill="#557ebf" d="M108.1 47.8c-2.3-8.5-7.1-16.2-13.8-22.1L80 39.9c6 4.9 9.5 12.3 9.3 20v2.5c16.9 0 16.9 25.2 0 25.2H63.9v20h-.1l.1.2h25.4c14.6.1 27.5-9.3 31.8-23.1 4.3-13.8-1-28.8-13-36.9z"></path><path fill="#36a852" d="M39 107.9h26.3V87.7H39c-1.9 0-3.7-.4-5.4-1.1l-15.2 14.6v.2c6 4.3 13.2 6.6 20.7 6.6z"></path><path fill="#f9bc15" d="M40.2 41.9c-14.9.1-28.1 9.3-32.9 22.8-4.8 13.6 0 28.5 11.8 37.3l15.6-14.9c-8.6-3.7-10.6-14.5-4-20.8 6.6-6.4 17.8-4.4 21.7 3.8L68 55.2C61.4 46.9 51.1 42 40.2 42.1z"></path></svg>`,
      level: 50,
      style: { margin: 20 },
    },

    // その他
    {
      name: 'GraphQL',
      innerHTML: `<svg viewBox="0 0 256 288" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g fill-rule="evenodd"><path d="M152.575995,32.9634453 L211.722058,67.1124427 C213.387503,65.348329 215.332859,63.7907081 217.539734,62.5088708 C229.806457,55.4573413 245.452038,59.6441869 252.577021,71.9109101 C259.62855,84.1776333 255.441705,99.8232143 243.174982,106.948197 C240.984974,108.207124 238.684929,109.10784 236.343812,109.66832 L236.343812,177.99302 C238.659582,178.554683 240.934429,179.449686 243.101528,180.695443 C255.441705,187.820426 259.62855,203.466007 252.503568,215.73273 C245.452038,227.999453 229.733004,232.186299 217.46628,225.13477 C215.024105,223.730884 212.902189,221.983449 211.125456,219.988103 L152.340162,253.928803 C153.180519,256.46808 153.635248,259.18431 153.635248,262.008393 C153.635248,276.111452 142.176512,287.64364 128,287.64364 C113.823488,287.64364 102.364752,276.184905 102.364752,262.008393 C102.364752,259.488481 102.726802,257.054441 103.40181,254.755362 L44.2714887,220.615454 C42.6238257,222.34493 40.705394,223.873378 38.5337196,225.13477 C26.193543,232.186299 10.547962,227.999453 3.49643248,215.73273 C-3.55509701,203.466007 0.631748621,187.820426 12.8984718,180.695443 C15.0673397,179.448669 17.3418356,178.553222 19.6561876,177.991646 L19.6561876,109.66832 C17.3150714,109.10784 15.0150257,108.207124 12.8250184,106.948197 C0.558295189,99.8966677 -3.62855044,84.1776333 3.42297904,71.9109101 C10.4745085,59.6441869 26.193543,55.4573413 38.4602662,62.5088708 C40.6551374,63.7837361 42.5913269,65.3313931 44.2507413,67.0836756 L103.41276,32.9254664 C102.730718,30.6154532 102.364752,28.1687503 102.364752,25.6352478 C102.364752,11.4587354 113.823488,0 128,0 C142.176512,0 153.635248,11.4587354 153.635248,25.6352478 C153.635248,28.1826393 153.265258,30.6422768 152.575995,32.9634453 Z M146.413638,43.4848713 L205.700555,77.715193 C203.867899,84.1516888 204.540515,91.2885638 208.137694,97.5461579 C211.746601,103.824151 217.625783,107.985785 224.150543,109.607654 L224.150543,178.017842 C223.818032,178.099463 223.48718,178.187674 223.158201,178.282419 L145.72529,44.1686182 C145.959017,43.9450469 146.18851,43.7170876 146.413638,43.4848713 Z M110.29093,44.1841203 L32.8593279,178.295656 C32.524559,178.19844 32.1878611,178.108015 31.8494573,178.024438 L31.8494573,109.607654 C38.3742168,107.985785 44.2533992,103.824151 47.8623055,97.5461579 C51.466599,91.276189 52.1347497,84.1234583 50.2885426,77.6770157 L109.558747,43.4563434 C109.797913,43.7038019 110.042027,43.9464469 110.29093,44.1841203 Z M135.162749,50.259763 L212.576817,184.340928 C210.844241,185.99279 209.317376,187.91755 208.064241,190.097482 C206.818484,192.264581 205.923481,194.539429 205.361818,196.855198 L50.6395564,196.855198 C50.0779798,194.540846 49.1825333,192.26635 47.9357589,190.097482 C46.6776713,187.931497 45.1539248,186.017428 43.4300297,184.372667 L120.858821,50.2659993 C123.124941,50.9200822 125.520915,51.2704957 128,51.2704957 C130.486952,51.2704957 132.890265,50.9178547 135.162749,50.259763 Z M146.958084,244.737995 L205.860107,210.729899 C205.683398,210.174924 205.525483,209.614096 205.38664,209.048468 L50.6067643,209.048468 C50.5246888,209.380792 50.4360084,209.711472 50.3407792,210.040295 L109.531782,244.215239 C114.192298,239.378545 120.739739,236.373145 128,236.373145 C135.518379,236.373145 142.272352,239.596041 146.958084,244.737995 Z" fill="#E535AB"></path></g></svg>`,
      level: 50,
      style: { margin: 30 },
    },
    {
      name: 'Hasura',
      innerHTML: `<svg viewBox="0 0 256 259" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><title>Hasura</title><g><path d="M233.499698,2.05686804 C235.107283,-0.413603419 238.707206,-0.733311491 240.641832,1.50465432 C255.17328,18.2989901 259.840841,63.3409266 252.716593,86.8400398 L252.368422,87.9425628 C249.83743,95.6444502 249.124085,103.782598 250.582734,111.688032 L251.174195,114.903131 L251.174195,114.903131 L251.744476,118.227781 C252.757653,124.384236 253.557433,130.769964 253.557433,135.608192 C253.557433,203.329074 197.340978,258.25971 127.970001,258.25971 C58.6288121,258.25971 2.38191763,203.357931 2.38191763,135.608192 C2.38191763,130.330125 3.33423854,123.210406 4.47703952,116.555767 L5.06078631,113.277883 C5.15954732,112.741588 5.25874934,112.211193 5.35795151,111.688032 C6.75842343,104.247624 6.23447558,96.6010741 4.05902207,89.3061119 L3.63183758,87.9425628 C-3.98676943,64.8071132 0.596300401,18.5945164 15.3573732,1.50465432 C17.1899115,-0.58798915 20.5183753,-0.437273545 22.2300433,1.68495513 L22.4998173,2.05686804 L40.6831848,29.929869 C45.2068258,35.481173 53.3015337,36.7890231 59.3728749,32.8943292 C79.1038805,20.2803864 102.673729,12.9560534 127.999789,12.9560534 C153.325848,12.9560534 176.895076,20.2803864 196.626082,32.8943292 C202.524739,36.6592 210.285126,35.5895472 214.855773,30.4735155 L215.317013,29.929869 L233.499698,2.05686804 Z M127.999789,40.9741435 C113.119774,40.9741435 99.0132999,44.2293405 86.4247383,50.1005481 C55.0276476,64.6327331 32.8267756,95.1213102 30.8921503,130.812431 C30.8027883,132.498208 30.7435239,134.183985 30.7435239,135.898929 C30.7435239,188.273129 74.3422511,230.882358 127.970001,230.882358 C181.598062,230.882358 225.225645,188.273129 225.256053,135.927785 C225.256053,134.242008 225.196789,132.527375 225.107117,130.841598 C223.172491,95.1793334 200.971619,64.6618999 169.575149,50.1294045 C156.95649,44.2293405 142.879803,40.9741435 127.999789,40.9741435 Z M121.540902,93.9580528 C122.400196,93.9580528 123.213879,94.3364886 123.742904,94.9956631 L123.951504,95.2950696 L145.259687,130.375861 L170.109149,172.46195 C170.615844,173.304993 170.615844,174.350963 170.109149,175.16484 C169.692669,175.902503 168.933863,176.395003 168.073232,176.506601 L167.698857,176.530713 L147.491875,176.530713 C146.632309,176.530713 145.818592,176.130422 145.289563,175.465576 L145.080963,175.16484 L131.808223,152.697433 L117.017261,175.251099 C116.574717,175.938263 115.835697,176.380502 115.019914,176.480324 L114.666233,176.501857 L94.1613776,176.501857 C93.1197518,176.501857 92.167488,175.948619 91.6912009,175.077029 C91.2747213,174.314117 91.2454672,173.396077 91.623394,172.613714 L91.8103503,172.28757 L119.160087,131.538497 L98.7743806,98.0851499 C98.2683063,97.2424166 98.2385189,96.1961365 98.7445933,95.3534032 C99.1871369,94.5902191 99.9487259,94.094292 100.810061,93.982235 L101.184672,93.9580528 L121.540902,93.9580528 Z" fill="#1EB4D4"></path></g></svg>`,
      level: 70,
      style: { margin: 30 },
    },
  ];

  return (
    <div className="container">
      {skills.map((item) => {
        return (
          <div className="tooltip">
            <Progress
              type="circle"
              className="skill"
              percent={item.level}
              style={{ margin: '20px' }}
              format={() => {
                return (
                  <p
                    style={item.style}
                    dangerouslySetInnerHTML={{
                      __html: String(item.innerHTML),
                    }}
                  ></p>
                );
              }}
            />

            <p className="description">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};