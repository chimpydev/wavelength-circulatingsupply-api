import styles from '../styles/Home.module.css';
import { request, gql } from 'graphql-request';
import Link from 'next/link';

export default function Home({ continents }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
            <a>
              <h2 >{continents.circulatingSupply}</h2>
            </a>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const query = gql`
  {
    embrGetProtocolData {
      circulatingSupply
    }
  }
  `;
  const results = await request('https://teste.testeborabora.cyou/graphql', query);
  console.log("vai toma: "+results)
  return {
    props: {
      continents: results.embrGetProtocolData,
    },
  };
}
