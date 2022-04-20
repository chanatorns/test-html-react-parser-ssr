import Link from 'next/link'
import Acomp from '../components/Acomp'
import parse from 'html-react-parser';
import Head from 'next/head';
import React from 'react';

export default function Home(props) {
  console.log(props)
  const parsed = JSON.parse(props.compProps);
  const parsed2 = JSON.parse(props.compProps2);
  console.log({parsed, parsed2})
  return (
    <>
      {React.createElement('div', null, `Hello`)}
      <Head>{React.createElement(parsed.type, parsed.props)}</Head>
      <Head>{React.createElement(parsed2.type, parsed2.props)}</Head>
      <Acomp />
      {/* <ServerComp /> */}
      <ul>
        <li>
          <Link href="/b" as="/a">
            <a>a</a>
          </Link>
        </li>
        <li>
          <Link href="/a" as="/b">
            <a>b</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export async function getServerSideProps({req, res}) {
  const parseComp = parse('<script>console.log("hello js");</script>');
  const parseCompScriptLinl = parse('<script src="demo_script_src.js">');
  return {
    props: {
      compProps: JSON.stringify(parseComp),
      compProps2: JSON.stringify(parseCompScriptLinl),
    }, // will be passed to the page component as props
  }
}