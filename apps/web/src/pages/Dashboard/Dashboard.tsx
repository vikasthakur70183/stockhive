import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <div className={styles.grid}>
        <section className={`${styles.panel} ${styles.large}`}>
          <h2 className={styles.heading}>Sales Overview</h2>
          <div className={styles.metricRow}>
            <Metric label="Sales" value="₹ 832" />
            <Metric label="Revenue" value="₹ 18,300" />
            <Metric label="Profit" value="₹ 868" />
            <Metric label="Cost" value="₹ 17,432" />
          </div>
        </section>

        <section className={styles.panel}>
          <h2 className={styles.heading}>Inventory Summary</h2>
          <div className={styles.metricRowTwo}>
            <Metric label="Quantity in Hand" value="868" />
            <Metric label="To be received" value="200" />
          </div>
        </section>

        <section className={`${styles.panel} ${styles.large}`}>
          <h2 className={styles.heading}>Purchase Overview</h2>
          <div className={styles.metricRow}>
            <Metric label="Purchase" value="82" />
            <Metric label="Cost" value="₹ 13,573" />
            <Metric label="Cancel" value="5" />
            <Metric label="Return" value="₹ 17,432" />
          </div>
        </section>

        <section className={styles.panel}>
          <h2 className={styles.heading}>Product Summary</h2>
          <div className={styles.metricRowTwo}>
            <Metric label="Number of Suppliers" value="31" />
            <Metric label="Number of Categories" value="21" />
          </div>
        </section>

        <section className={`${styles.panel} ${styles.large}`}>
          <div className={styles.headerRow}>
            <h2 className={styles.heading}>Sales & Purchase</h2>
            <button className={styles.filterButton}>Weekly</button>
          </div>
          <div className={styles.chartPlaceholder} />
        </section>

        <section className={styles.panel}>
          <h2 className={styles.heading}>Order Summary</h2>
          <div className={styles.lineChartPlaceholder} />
        </section>

        <section className={`${styles.panel} ${styles.large}`}>
          <div className={styles.headerRow}>
            <h2 className={styles.heading}>Top Selling Stock</h2>
            <a href="#" className={styles.link}>
              See All
            </a>
          </div>
          <div className={styles.tablePlaceholder} />
        </section>

        <section className={styles.panel}>
          <div className={styles.headerRow}>
            <h2 className={styles.heading}>Low Quantity Stock</h2>
            <a href="#" className={styles.link}>
              See All
            </a>
          </div>
          <div className={styles.listPlaceholder} />
        </section>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <article className={styles.metric}>
      <p className={styles.metricValue}>{value}</p>
      <p className={styles.metricLabel}>{label}</p>
    </article>
  );
}

export default Dashboard;
