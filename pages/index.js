import Link from 'next/link'
import Acomp from '../components/Acomp'
import parse from 'html-react-parser';
import Head from 'next/head';
import React from 'react';

export default function Home(props) {
  const parsed = JSON.parse(props.compProps);
  console.log(props)
  return (
    <>
      {React.createElement('div', null, `Hello`)}
      <Head>{React.createElement(parsed.type, parsed.props)}</Head>
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
  return {
    props: {
      compProps: JSON.stringify(parseComp),
    }, // will be passed to the page component as props
  }
}