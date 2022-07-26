import { UiComponents } from '@nx-release-please/ui-components';
import styles from './feature-login.module.css';

export interface FeatureLoginProps {
  title?: string;
}

export function FeatureLogin({ title = 'FeatureLogin' }: FeatureLoginProps) {
  return (
    <div className={styles['container']}>
      <h1>{title}</h1>
      <UiComponents></UiComponents>
    </div>
  );
}

export default FeatureLogin;
