import '../styles/globals.css';
import { ToastProvider } from 'react-toast-notifications';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider autoDismiss={true} autoDismissTimeout={2000} placement='top-center'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToastProvider>
  );
}

export default MyApp
