/* eslint-disable flowtype/no-weak-types */
// @flow
import React from "react";

const Svg = (p: Object): React$Element<*> => (
    <svg width="12" height="13" {...p} />
);

export const IconClose = (): React$Element<*> => (
    <Svg width="14px" height="14px">
        <path
            d="M13.67 10.465c.22.22.33.487.33.801 0 .314-.11.581-.33.801l-1.603 1.603c-.22.22-.487.33-.801.33-.314 0-.581-.11-.801-.33L7 10.205 3.535 13.67c-.22.22-.487.33-.801.33-.314 0-.581-.11-.801-.33L.33 12.067c-.22-.22-.33-.487-.33-.801 0-.314.11-.581.33-.801L3.795 7 .33 3.535C.11 3.315 0 3.048 0 2.734c0-.314.11-.581.33-.801L1.933.33c.22-.22.487-.33.801-.33.314 0 .581.11.801.33L7 3.795 10.465.33c.22-.22.487-.33.801-.33.314 0 .581.11.801.33l1.603 1.603c.22.22.33.487.33.801 0 .314-.11.581-.33.801L10.205 7l3.465 3.465z"
            fill="#3c476f"
            fillOpacity="0.71"
        />
    </Svg>
);

export const IconJustify = (): React$Element<*> => (
    <Svg width="10px" height="9px">
        <path
            d="M9.876 7.334A.45.45 0 0110 7.65v.9a.45.45 0 01-.124.316.386.386 0 01-.293.134H.417a.386.386 0 01-.293-.134A.45.45 0 010 8.55v-.9a.45.45 0 01.124-.316.386.386 0 01.293-.134h9.166c.113 0 .21.045.293.134zm0-3.6A.45.45 0 0110 4.05v.9a.45.45 0 01-.124.316.386.386 0 01-.293.134H.417a.386.386 0 01-.293-.134A.45.45 0 010 4.95v-.9a.45.45 0 01.124-.316.386.386 0 01.293-.134h9.166c.113 0 .21.045.293.134zm0-3.6A.45.45 0 0110 .45v.9a.45.45 0 01-.124.316.386.386 0 01-.293.134H.417a.386.386 0 01-.293-.134A.45.45 0 010 1.35v-.9A.45.45 0 01.124.134.386.386 0 01.417 0h9.166c.113 0 .21.045.293.134z"
            fill="#1a4769"
            fillOpacity="0.498"
        />
    </Svg>
);

export const IconCsv = (): React$Element<*> => (
    <Svg width="23px" height="27px">
        <path
            d="M17.31 1.025l4.672 4.7c.28.282.519.663.719 1.146.2.482.299.924.299 1.325v17.358a1.4 1.4 0 01-.42 1.024c-.279.281-.618.422-1.017.422H1.438c-.4 0-.74-.14-1.019-.422A1.4 1.4 0 010 25.554V1.446C0 1.045.14.703.42.422.698.14 1.037 0 1.437 0h13.416c.4 0 .839.1 1.318.301.479.201.858.442 1.138.724zM15.947 2.38c-.12-.121-.324-.231-.614-.332v5.665h5.63c-.1-.291-.21-.497-.329-.617L15.947 2.38zM2 25h19V9.643h-6.146c-.4 0-.739-.14-1.018-.422a1.4 1.4 0 01-.42-1.025V2H2v23zm3.75-11.982v-.964a.47.47 0 01.135-.347c.09-.09.204-.136.344.293h10.542c.14-.429.254-.383.344-.293a.47.47 0 01.135.347v.964a.47.47 0 01-.135.346c-.09.09-.204.136-.344-.364H6.229c-.14.5-.254.455-.344.364a.47.47 0 01-.135-.346zM6.23 15h10.54c.14.429.255.474.345.564a.47.47 0 01.135.347v.964a.47.47 0 01-.135.347c-.09.09-.204.135-.344-.222H6.229c-.14.357-.254.312-.344.222a.47.47 0 01-.135-.347v-.964a.47.47 0 01.135-.347c.09-.09.204-.135.344-.564zm0 4h10.54c.14.286.255.33.345.421a.47.47 0 01.135.347v.964a.47.47 0 01-.135.347c-.09.09-.204.135-.344-.079H6.229c-.14.214-.254.17-.344.079a.47.47 0 01-.135-.347v-.964a.47.47 0 01.135-.347c.09-.09.204-.135.344-.421z"
            fill="#1a4869"
        />
    </Svg>
);

export const IconExcel = (): React$Element<*> => (
    <Svg width="23px" height="27px">
        <path
            d="M17.31 1.025l4.672 4.7c.28.282.519.663.719 1.146.2.482.299.924.299 1.325v17.358a1.4 1.4 0 01-.42 1.024c-.279.281-.618.422-1.017.422H1.438c-.4 0-.74-.14-1.019-.422A1.4 1.4 0 010 25.554V1.446C0 1.045.14.703.42.422.698.14 1.037 0 1.437 0h13.416c.4 0 .839.1 1.318.301.479.201.858.442 1.138.724zM15.947 2.38c-.12-.121-.324-.231-.614-.332v5.665h5.63c-.1-.291-.21-.497-.329-.617L15.947 2.38zM2 25h19V9.643h-6.146c-.4 0-.739-.14-1.018-.422a1.4 1.4 0 01-.42-1.025V2H2v23zm5.442-3.454H6.424v1.597h4.208v-1.597H9.508l1.543-2.426c.05-.07.1-.153.15-.249.05-.095.087-.163.112-.203.025-.04.042-.06.052-.06h.03c.01.04.035.09.075.15.02.04.042.078.067.113.025.036.055.076.09.12l.098.129 1.602 2.426h-1.138v1.597h4.357v-1.597h-1.018l-2.875-4.114 2.92-4.248h1.003V11.57h-4.178v1.613h1.109l-1.543 2.395a6.727 6.727 0 01-.284.452l-.03.045h-.03a.52.52 0 00-.075-.15 1.797 1.797 0 00-.255-.347l-1.587-2.395h1.138V11.57H6.5v1.613h1.018l2.83 4.098-2.905 4.264z"
            fill="#3da751"
        />
    </Svg>
);

export const IconPdf = (): React$Element<*> => (
    <Svg width="24px" height="28px">
        <path
            d="M18.063 1.063l4.875 4.875c.291.291.541.687.75 1.187.208.5.312.958.312 1.375v18c0 .417-.146.77-.438 1.063A1.447 1.447 0 0122.5 28h-21c-.417 0-.77-.146-1.063-.438A1.447 1.447 0 010 26.5v-25C0 1.083.146.73.438.437A1.447 1.447 0 011.5 0h14c.417 0 .875.104 1.375.313.5.208.896.458 1.188.75zM16.64 2.468c-.125-.125-.339-.24-.641-.344V8h5.875c-.104-.302-.219-.516-.344-.64l-4.89-4.891zM2 26h20V10h-6.5c-.417 0-.77-.146-1.063-.438A1.447 1.447 0 0114 8.5V2H2v24zm9.688-12.984c.572 1.708 1.333 2.948 2.28 3.718.345.271.782.563 1.313.875.615-.073 1.224-.109 1.828-.109 1.532 0 2.453.255 2.766.766.167.229.177.5.031.812 0 .01-.005.021-.015.031l-.032.032v.015c-.062.396-.432.594-1.109.594-.5 0-1.099-.104-1.797-.313a11.391 11.391 0 01-2.031-.828c-2.302.25-4.344.683-6.125 1.297C7.203 22.636 5.943 24 5.016 24a.909.909 0 01-.438-.11l-.375-.187a1.671 1.671 0 00-.094-.078c-.104-.104-.135-.292-.093-.563.093-.416.385-.893.875-1.43.49-.536 1.177-1.038 2.062-1.507.146-.094.266-.063.36.094.02.02.03.041.03.062a38.204 38.204 0 001.673-3.078c.708-1.417 1.25-2.781 1.625-4.094a12.63 12.63 0 01-.477-2.492c-.068-.807-.034-1.471.102-1.992.114-.417.333-.625.656-.625H11.266c.24 0 .421.078.546.234.188.22.235.573.141 1.063a.34.34 0 01-.062.125c.01.031.015.073.015.125v.469c-.02 1.28-.094 2.28-.219 3zM5.742 22c-.38.458-.638.844-.773 1.156.541-.25 1.255-1.073 2.14-2.468A8.908 8.908 0 005.742 22zm5.446-13.25v.031c-.157.438-.167 1.125-.032 2.063.01-.073.047-.302.11-.688 0-.031.036-.255.109-.672a.352.352 0 01.063-.125c-.01-.01-.016-.02-.016-.03a.12.12 0 01-.016-.048.9.9 0 00-.203-.562c0 .01-.005.02-.015.031zm-1.235 9.063a106.31 106.31 0 01-.703 1.296 22.918 22.918 0 014.438-1.265c-.021-.01-.089-.06-.204-.149a2.793 2.793 0 01-.25-.21c-.791-.699-1.453-1.615-1.984-2.75-.281.895-.714 1.921-1.297 3.078zm9.422 1.093c0-.01-.01-.026-.031-.047-.25-.25-.98-.375-2.188-.375.792.292 1.438.438 1.938.438.146 0 .24-.005.281-.016z"
            fill="#ff4a4a"
        />
    </Svg>
);

export const IconNav = (): React$Element<*> => (
    <Svg width="13px" height="11px">
        <path
            d="M12.84 8.963c.106.11.16.238.16.387v1.1a.533.533 0 01-.16.387.517.517 0 01-.382.163H.542a.517.517 0 01-.381-.163A.533.533 0 010 10.45v-1.1c0-.149.054-.278.16-.387A.517.517 0 01.543 8.8h11.916c.147 0 .274.054.381.163zm0-4.4c.106.11.16.238.16.387v1.1a.533.533 0 01-.16.387.517.517 0 01-.382.163H.542a.517.517 0 01-.381-.163A.533.533 0 010 6.05v-1.1c0-.149.054-.278.16-.387A.517.517 0 01.543 4.4h11.916c.147 0 .274.054.381.163zm0-4.4c.106.11.16.238.16.387v1.1a.533.533 0 01-.16.387.517.517 0 01-.382.163H.542a.517.517 0 01-.381-.163A.533.533 0 010 1.65V.55C0 .401.054.272.16.163A.517.517 0 01.543 0h11.916c.147 0 .274.054.381.163z"
            fillOpacity="0.11"
        />
    </Svg>
);

export const SortCopy = (): React$Element<*> => (
    <Svg width="13px" height="16px">
        <defs>
            <linearGradient
                gradientUnits="userSpaceOnUse"
                x1="442.5"
                y1="6"
                x2="442.5"
                y2="22"
                id="LinearGradient9"
            >
                <stop
                    id="Stop10"
                    stopColor="#246290"
                    stopOpacity="0.6"
                    offset="0"
                />
                <stop id="Stop11" stopColor="#f2f2f2" offset="0" />
                <stop id="Stop12" stopColor="#e4e4e4" offset="1" />
                <stop id="Stop13" stopColor="#ffffff" offset="1" />
            </linearGradient>
        </defs>
        <g transform="matrix(1 0 0 1 -436 -6 )">
            <path
                d="M 439.6 21  L 448 21  L 448 12.2  L 442.8 7  L 437 7  L 437 18.4  L 438.3 18.4  L 438.3 19.7  L 439.6 19.7  L 439.6 21  Z "
                fillRule="nonzero"
                fill="url(#LinearGradient9)"
                stroke="none"
            />
            <path
                d="M 439.1 21.5  L 448.5 21.5  L 448.5 11.7  L 443.3 6.5  L 436.5 6.5  L 436.5 18.9  L 437.8 18.9  L 437.8 20.2  L 439.1 20.2  L 439.1 21.5  Z "
                strokeWidth="1"
                stroke="#1a4769"
                fill="none"
                stopOpacity="0.6"
            />
            <path
                d="M 445.9 10.4  L 447.2 10.9  L 447.2 20.2  L 439.6 20.2  M 443.3 7  L 443.3 9.1  L 445.9 9.1  L 445.9 18.9  L 438.3 18.9  M 448 11.7  L 447.2 11.7  "
                strokeWidth="1"
                stroke="#1a4769"
                fill="none"
                stopOpacity="0.6"
            />
        </g>
    </Svg>
);

export const SortDelete = (): React$Element<*> => (
    <Svg width="15px" height="16px">
        <path
            d="M5.359 6.094a.32.32 0 01.096.24v6a.32.32 0 01-.096.239.336.336 0 01-.245.094h-.682a.336.336 0 01-.245-.094.32.32 0 01-.096-.24v-6a.32.32 0 01.096-.24A.336.336 0 014.432 6h.682c.1 0 .18.031.245.094zm2.727 0a.32.32 0 01.096.24v6a.32.32 0 01-.096.239.336.336 0 01-.245.094h-.682a.336.336 0 01-.245-.094.32.32 0 01-.096-.24v-6a.32.32 0 01.096-.24A.336.336 0 017.16 6h.682c.1 0 .181.031.245.094zm2.727 0a.32.32 0 01.096.24v6a.32.32 0 01-.096.239.336.336 0 01-.245.094h-.682a.336.336 0 01-.245-.094.32.32 0 01-.096-.24v-6a.32.32 0 01.096-.24A.336.336 0 019.886 6h.682c.1 0 .181.031.245.094zm1.385 8.203c.05-.129.075-.27.075-.422V4H2.727v9.875a1.16 1.16 0 00.23.703c.053.06.09.089.111.089h8.864c.021 0 .058-.03.112-.089a.928.928 0 00.154-.281zM5.636 1.447l-.522 1.22h4.772l-.511-1.22a.301.301 0 00-.181-.114H5.817a.301.301 0 00-.181.115zm9.268 1.313A.32.32 0 0115 3v.667a.32.32 0 01-.096.24.336.336 0 01-.245.093h-1.023v9.875c0 .576-.167 1.075-.5 1.495-.334.42-.735.63-1.204.63H3.068c-.469 0-.87-.203-1.204-.61-.333-.406-.5-.897-.5-1.473V4H.34a.336.336 0 01-.245-.094.32.32 0 01-.096-.24V3a.32.32 0 01.096-.24.336.336 0 01.245-.093h3.292l.746-1.74c.106-.257.298-.476.575-.656C5.23.09 5.51 0 5.795 0h3.41c.284 0 .564.09.841.27.277.181.469.4.575.657l.746 1.74h3.292c.1 0 .181.03.245.093z"
            fill="#1a4769"
            fillOpacity="0.6"
        />
    </Svg>
);

export const IconColumns = (): React$Element<*> => (
    <Svg width="12px" height="13px">
        <path
            d="M.992 11.836c.045.054.1.08.162.08h4.384v-9.75H.923v9.48c0 .073.023.137.069.19zm10.016 0a.284.284 0 00.069-.19v-9.48H6.462v9.75h4.384a.207.207 0 00.162-.08zM11.661.398c.226.265.339.584.339.956v10.292c0 .372-.113.691-.339.956-.226.265-.498.398-.815.398H1.154c-.317 0-.59-.133-.815-.398A1.426 1.426 0 010 11.646V1.354C0 .982.113.663.339.398.565.133.837 0 1.154 0h9.692c.317 0 .59.133.815.398z"
            fill="#3c476f"
            fillOpacity="0.8"
        />
    </Svg>
);

export const IconShare = (): React$Element<*> => (
    <Svg width="12px" height="12px">
        <path
            d="M7.797 7.672A2.41 2.41 0 019.5 7a2.41 2.41 0 011.77.73A2.41 2.41 0 0112 9.5a2.41 2.41 0 01-.73 1.77A2.41 2.41 0 019.5 12a2.41 2.41 0 01-1.77-.73A2.41 2.41 0 017 9.5c0-.063.005-.151.016-.266L4.203 7.828A2.41 2.41 0 012.5 8.5a2.41 2.41 0 01-1.77-.73A2.41 2.41 0 010 6c0-.693.243-1.283.73-1.77A2.41 2.41 0 012.5 3.5a2.41 2.41 0 011.703.672l2.813-1.406A3.146 3.146 0 017 2.5c0-.693.243-1.283.73-1.77A2.41 2.41 0 019.5 0a2.41 2.41 0 011.77.73A2.41 2.41 0 0112 2.5a2.41 2.41 0 01-.73 1.77A2.41 2.41 0 019.5 5a2.41 2.41 0 01-1.703-.672L4.984 5.734C4.994 5.85 5 5.938 5 6c0 .063-.005.151-.016.266l2.813 1.406z"
            fill="#636c8c"
        />
    </Svg>
);

export const IconGroupSort = (): React$Element<*> => (
    <Svg width="12px" height="12px">
        <path
            d="M8.013 10.346c.041.04.061.092.061.154v1.286a.207.207 0 01-.218.214H6.112a.207.207 0 01-.218-.214V10.5a.207.207 0 01.218-.214h1.744c.064 0 .116.02.157.06zm-3.271-.857c.04.04.061.091.061.154a.25.25 0 01-.068.16L2.561 11.94a.23.23 0 01-.157.06.247.247 0 01-.156-.06L.067 9.797c-.068-.072-.084-.15-.048-.235.036-.089.104-.133.204-.133h1.309V.214A.207.207 0 011.75 0h1.309a.207.207 0 01.218.214V9.43h1.308c.064 0 .116.02.157.06zm4.58-2.572c.04.04.061.092.061.154v1.286a.207.207 0 01-.218.214H6.112a.207.207 0 01-.218-.214V7.071a.207.207 0 01.218-.214h3.053c.064 0 .116.02.157.06zM10.63 3.49c.041.04.061.091.061.154v1.286a.207.207 0 01-.218.214H6.112a.207.207 0 01-.218-.214V3.643a.207.207 0 01.218-.214h4.361c.064 0 .116.02.157.06zM11.94.06c.04.04.061.092.061.154V1.5a.207.207 0 01-.218.214h-5.67a.207.207 0 01-.218-.214V.214A.207.207 0 016.112 0h5.67c.064 0 .116.02.157.06z"
            fill="#3c476f"
            fillOpacity="0.8"
        />
    </Svg>
);

export const IconSearch = (): React$Element<*> => (
    <Svg width="11px" height="11px">
        <path
            d="M6.746 6.746c.58-.58.87-1.277.87-2.092 0-.815-.29-1.513-.87-2.092a2.852 2.852 0 00-2.092-.87c-.815 0-1.513.29-2.092.87-.58.58-.87 1.277-.87 2.092 0 .815.29 1.513.87 2.092.58.58 1.277.87 2.092.87.815 0 1.513-.29 2.092-.87zm4.01 2.813a.81.81 0 01.244.595c0 .229-.084.427-.251.595a.813.813 0 01-.595.251.786.786 0 01-.595-.251L7.29 8.488a4.527 4.527 0 01-2.637.82c-.63 0-1.233-.123-1.808-.367a4.653 4.653 0 01-1.488-.992 4.653 4.653 0 01-.991-1.487A4.573 4.573 0 010 4.654c0-.63.122-1.233.367-1.808.244-.575.575-1.071.991-1.488A4.653 4.653 0 012.846.367 4.573 4.573 0 014.654 0c.63 0 1.233.122 1.808.367.575.244 1.07.575 1.487.991.417.417.747.913.992 1.488.244.575.367 1.178.367 1.808 0 .97-.274 1.849-.82 2.637l2.267 2.268z"
            fill="#3c476f"
            fillOpacity="0.8"
        />
    </Svg>
);

export const IconFilter = (): React$Element<*> => (
    <Svg
        width="11px"
        height="11px"
        style={{
            position: "absolute",
            right: "-14px",
            top: "-14px",
            zIndex: "9"
        }}
    >
        <path
            d="M10.486 0c.218 0 .371.102.46.305.088.213.051.396-.11.547l-3.84 3.851V10.5a.467.467 0 01-.304.46.54.54 0 01-.195.04.462.462 0 01-.35-.148l-1.995-2a.481.481 0 01-.148-.352V4.703L.164.852C.003.7-.034.518.054.305A.466.466 0 01.515 0h9.972z"
            fill="#636c8c"
        />
    </Svg>
);
