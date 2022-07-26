import styles from './ui-components.module.css';

export interface UiComponentsProps {
  text?: string;
}

export function UiComponents(props: UiComponentsProps) {
  const { text = 'Hallo thereeeeewwww' } = props;
  return (
    <div className={styles['container']}>
      <span>{text}</span>
    </div>
  );
}

export default UiComponents;
