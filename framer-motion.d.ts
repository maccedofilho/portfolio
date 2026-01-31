import 'framer-motion';

declare module 'framer-motion' {
  interface MotionProps {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    ref?: React.Ref<HTMLElement>;
    id?: string;
    key?: React.Key;
    href?: string;
    target?: string;
    rel?: string;
    'aria-label'?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
  }
}
