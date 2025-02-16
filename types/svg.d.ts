// svg.d.ts
declare module '*.svg' {
  import { ReactComponent as ReactSVG } from 'react';
  const content: ReactSVG;
  export default content;
}
