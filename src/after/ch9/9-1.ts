export {};

// 예제 1
const area = height * width;
const perimeter = 2 * area;

interface IScenario {
  // 첫 번째 힘
  primaryForce: number;
  // 두 번째 힘
  secondaryForce: number;
  // 질량
  mass: number;
  // 지연 시간
  delay: number;
}

class DistanceTravel {
  constructor(
    private scenario: IScenario,
    private time: number,
  ) {}

  private get primaryTime() {
    return Math.min(this.time, this.scenario.delay);
  }

  private get secondaryTime() {
    return this.time - this.scenario.delay;
  }

  public calculateTotalDistance() {
    const primaryDistance = this.getDistance(
      this.getAcceleration(this.scenario.primaryForce),
      this.primaryTime,
    );

    if (this.secondaryTime > 0) {
      const sumOfForces =
        this.scenario.primaryForce + this.scenario.secondaryForce;

      const velocity = this.getVelocity(
        this.scenario.primaryForce,
        this.primaryTime,
      );

      return (
        primaryDistance +
        this.getDistance(
          this.getAcceleration(sumOfForces),
          this.secondaryTime,
          velocity,
        )
      );
    }

    return primaryDistance;
  }

  private getVelocity(force: number, time: number) {
    return this.getAcceleration(force) * time;
  }

  // 가속도(a) = 힘(F) / 질량(m)
  private getAcceleration(force: number) {
    return force / this.scenario.mass;
  }

  // 전파된 거리
  private getDistance(acceleration: number, time: number, velocity = 0) {
    return 0.5 * acceleration * time * time + velocity * time;
  }
}

function distanceTravelled(scenario: IScenario, time: number) {
  const distanceTravel = new DistanceTravel(scenario, time);
  return distanceTravel.calculateTotalDistance();
}

// 예제 3
function discount(inputValue: number, quantity: number) {
  if (inputValue > 50) return inputValue - 2;
  if (quantity > 100) return inputValue - 1;
  return inputValue;
}
