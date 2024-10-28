import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        />
        <h1>I Am Hasani</h1>
        <h2>My personal blog</h2>

        {/* <Features /> */}

        <div className="explanation">
          <p>
            This is a statically generated{' '}
            <ExtLink href="https://nextjs.org">Next.js</ExtLink> site with a{' '}
            <ExtLink href="https://notion.so">Notion</ExtLink> powered blog that
            is deployed with <ExtLink href="https://vercel.com">Vercel</ExtLink>
            . It leverages some upcoming features in Next.js like{' '}
            <ExtLink href="https://github.com/vercel/next.js/issues/9524">
              SSG support
            </ExtLink>{' '}
            and{' '}
            <ExtLink href="https://github.com/vercel/next.js/issues/8626">
              built-in CSS support
            </ExtLink>{' '}
            which allow us to achieve all of the benefits listed above including
            blazing fast speeds, great local editing experience, and always
            being available!
          </p>
        </div>
      </div>
    </>
  )
}
