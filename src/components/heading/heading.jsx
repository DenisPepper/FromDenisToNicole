import './heading.scss';

export function Heading(props) {
  const { As = 'h1', children, clss = '' } = props;

  return <As className={`heading ${clss}`}>{children}</As>;
}
