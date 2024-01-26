declare module '*.png' {
    import type {ImageSourcePropType} from 'react-native';

    const value: ImageSourcePropType;
    export default value;
}

declare module '*.jpg' {
    import type {ImageSourcePropType} from 'react-native';

    const value: ImageSourcePropType;
    export default value;
}

declare module '*.svg' {
    import type React from 'react';
    import type {SvgProps} from 'react-native-svg';

    const content: React.FC<SvgProps>;
    export default content;
}

declare module '*.lottie' {
    import type {LottieViewProps} from 'lottie-react-native';

    const value: LottieViewProps['source'];
    export default value;
}

// Global methods for Onyx key management for debugging purposes
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface Window {
    enableMemoryOnlyKeys: () => void;
    disableMemoryOnlyKeys: () => void;
    setSupportToken: (token: string, email: string, accountID: number) => void;
    Onyx: Record<string, unknown>;
}
