import "./page.css";
import 'semantic-ui-css/semantic.min.css'

import TopComponent from "@/components/pages/landing/topComponent";
import MainComponent from "@/components/pages/landing/mainComponent";

export default function Home() {
  return (
    <div className="page">
      <TopComponent />
      <MainComponent />
    </div>
  );
}
