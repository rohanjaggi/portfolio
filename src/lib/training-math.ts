export const EPOCH_THRESHOLDS = [0, 0.12, 0.35, 0.65, 0.85] as const

export function getEpoch(progress: number): number {
  for (let i = EPOCH_THRESHOLDS.length - 1; i >= 0; i--) {
    if (progress >= EPOCH_THRESHOLDS[i]) return i
  }
  return 0
}

export function getLearningRate(progress: number): number {
  const initial = 0.01
  const decay = 0.96
  const step = progress * 100
  return initial * Math.pow(decay, step)
}

export function getLoss(progress: number): number {
  const baseLoss = 2.8 * Math.exp(-4.5 * progress) + 0.12
  const oscillation = Math.sin(progress * 40) * 0.08 * Math.exp(-3 * progress)
  return Math.max(0.08, baseLoss + oscillation)
}

export function generateLossCurvePath(
  width: number,
  height: number,
  steps = 200
): string {
  const points: [number, number][] = []
  const padding = 4

  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const loss = getLoss(t)
    const maxLoss = 3.0
    const x = padding + t * (width - padding * 2)
    const y = padding + (1 - loss / maxLoss) * (height - padding * 2)
    points.push([x, y])
  }

  let d = `M ${points[0][0]},${points[0][1]}`
  for (let i = 1; i < points.length; i++) {
    d += ` L ${points[i][0]},${points[i][1]}`
  }
  return d
}

export function getParticleOrganization(progress: number, temperature: number): number {
  const baseOrg = Math.pow(progress, 0.7)
  const tempEffect = temperature * 0.4
  return Math.max(0, Math.min(1, baseOrg - tempEffect))
}

export function getAccentLightness(epoch: number): number {
  const map = [0.52, 0.58, 0.65, 0.72, 0.78]
  return map[Math.min(epoch, 4)]
}

export function getAccentChroma(epoch: number): number {
  const map = [0.08, 0.10, 0.12, 0.14, 0.16]
  return map[Math.min(epoch, 4)]
}

export function getTextLightness(epoch: number): number {
  const map = [0.75, 0.80, 0.85, 0.90, 0.92]
  return map[Math.min(epoch, 4)]
}
