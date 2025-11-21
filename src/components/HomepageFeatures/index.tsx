import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Bis Lists',
    Svg: require('@site/static/img/google-sheet.svg').default,
    description: (
      <>
        Список найкращих речей для кожного класу та спеку який є актуальний в нашій гільдії.
      </>
    ),
    link: "https://docs.google.com/spreadsheets/d/1wHTD-RT1HMKSZasJkSWByveClYITjxOUgmocjLzGZhU/edit",
  },
  {
    title: 'Verkhovna Rada Discord',
    Svg: require('@site/static/img/discord.svg').default,
    description: "",
    link: "https://discord.gg/d5VzmuB7v4",
  },
  {
    title: 'Questions & Feedback',
    Svg: require('@site/static/img/google-forms.svg').default,
    description: (
      <>Залишайте свої питання та пропозиції. Обовʼязково вкажіть імʼя свого персонажа щоб отримати відповідь.</>
    ),
    link: "https://forms.gle/Jctgio78c4wYaJHy8",
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link href={link} passHref>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
