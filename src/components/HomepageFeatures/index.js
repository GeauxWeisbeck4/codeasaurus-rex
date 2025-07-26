import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Knowledge & Learning Wiki',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Andrew's Open Source collection of knowledge in the form of a Wiki/Notes catalog with topics ranging from programming to economics, sports to philosophy, and math to writing. You'll find something interesting in there, guaranteed.
      </>
    ),
  },
  {
    title: 'Reflections and Thoughts of Andrew',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Get insight from Andrew on a variety of topics with his unique perspective and diverse range of experience and knowledge you likely won't find in too many other places.
      </>
    ),
  },
  {
    title: 'Open Source and Open to Collaboration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This site is dynamic, meaning Andrew is always welcoming your input, corrections, feedback, recommendations, and any other type of contribution you are willing to make. Just check out the GitHub repository and open up an issue or find one that is tagged for the community!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
