import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">不仅是一款轻盈快速的自动化工具，更是您的“数字员工”。通过直观逻辑化繁为简，无需代码即可跨软件联动，让流程设计变得轻而易举。</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="https://api.winui.net/simple/v5/download_latest">
                立即下载
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="https://apps.microsoft.com/detail/xp9lv7v0p6s74z?hl=en-US&gl=CN">
                微软商店
              </Link>
            </div>
          </div>
          <div className={styles.screenshotWrapper}>
            <img
              src="./images/showcase.png"
              alt="软件界面截图"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: '极致纯净装机',
    imageUrl: './images/shield.png',
    description: (
      <>坚持“零干扰”原则，承诺永久免费且无广告，绝不捆绑任何第三方软件或隐形插件。虽然并非开源项目，但我们始终保持功能简洁、过程透明，为您打造一个安全且纯粹的运行环境。</>
    ),
  },
  {
    title: '轻轻量化高响应',
    imageUrl: './images/fast.png',
    description: (
      <>核心体积轻小，运行快如闪电。深度适配 Windows 10 (1809) 及更高版本，采用以效率为核心的设计架构，以极低的资源占用提供最流畅的使用体验，让工具回归工具。</>
    ),
  },
  {
    title: '强全场景自动化',
    imageUrl: './images/automation.png',
    description: (
      <>内置强大的自动化引擎，集成鼠标键盘模拟、AI 图像识别、浏览器自动化及逻辑流程控制等模块。无论是简单的日常重复，还是复杂的业务流，都能轻松实现一键自动化。</>
    ),
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      description="小友+ 文档首页">
      <HomepageHeader />
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <div key={idx} className="col col--4">
                    <div className={styles.featureCard}>
                      {props.imageUrl && (
                        <div className="text--center">
                          <img
                            className={styles.featureImage}
                            src={props.imageUrl}
                            alt={props.title}
                          />
                        </div>
                      )}
                      <h3 className="text--center">{props.title}</h3>
                      <p className="text--center">{props.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
