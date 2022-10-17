declare module "*.svg" {
    import React from 'react'
    const url: string;
    export const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
    export default svg;
}