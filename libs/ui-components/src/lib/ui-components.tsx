import styles from './ui-components.module.css';

export interface UiComponentsProps {
  text?: string;
}

export function UiComponents(props: UiComponentsProps) {
  const { text = 'Hi from ui components lib' } = props;
  return (
    <div className={styles['container']}>
      <span>{text}</span>
    </div>
  );
}

export default UiComponents;
