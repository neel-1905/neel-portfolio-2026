export function Stats() {
  return (
    <div className="w-full bg-card py-10">
      <div className="bg-card grid grid-cols-4">
        <div className="stat">
          <span className="text-primary">2.5+</span>
          <h2>Years Experience</h2>
        </div>
        <div className="stat">
          <span className="text-secondary">10+</span>
          <h2>Projects Shipped</h2>
        </div>
        <div className="stat">
          <span className="text-tertiary">10+</span>
          <h2>Core Skills Mastered</h2>
        </div>
        <div className="stat">
          <span>100%</span>
          <h2>Focus on Quality & Speed</h2>
        </div>
      </div>
    </div>
  );
}
