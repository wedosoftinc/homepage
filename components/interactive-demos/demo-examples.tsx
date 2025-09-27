import { InteractiveDemo } from './interactive-demo'

// Freshworks 통합 체험 데모 (Vercel 배포)
export function FreshworksDemo() {
  return (
    <InteractiveDemo
      title="Freshworks 통합 상담원 화면 체험"
      description="실제 상담원이 사용하는 Freshworks 옴니채널 인터페이스를 직접 체험해보세요. 전화, 채팅, 이메일을 하나의 화면에서 관리할 수 있습니다."
      productSlug="freshworks"
      demoUrl="https://freshworks-demo.vercel.app/"
    />
  )
}

// 예시 2: GitHub Pages로 배포된 인터랙티브 사용
export function MondayWorkManagementDemo() {
  return (
    <InteractiveDemo
      title="Monday.com 프로젝트 보드 체험"
      description="드래그 앤 드롭으로 작업을 관리하고 팀원과 협업하는 방법을 체험해보세요."
      productSlug="monday-work-management"
      demoUrl="https://username.github.io/monday-interactive-demo/"
    />
  )
}

// 예시: Freshdesk 인터랙티브 (Vercel 배포)
export function FreshdeskInteractiveDemo() {
  return (
    <InteractiveDemo
      title="Freshdesk 티켓 관리 체험"
      description="실제 Freshdesk 인터페이스를 시뮬레이션으로 체험해보세요."
      productSlug="freshdesk"
      demoUrl="https://freshdesk-interactive.vercel.app/"
    />
  )
}

// 예시: Monday.com 인터랙티브 (Vercel 배포)
export function MondayInteractiveDemo() {
  return (
    <InteractiveDemo
      title="Monday.com 프로젝트 보드 체험"
      description="드래그 앤 드롭으로 작업을 관리하고 팀원과 협업하는 방법을 체험해보세요."
      productSlug="monday-work-management"
      demoUrl="https://monday-interactive.vercel.app/"
    />
  )
}

// 예시 3: HTML embed 사용
export function GoogleWorkspaceDemo() {
  return (
    <InteractiveDemo
      title="Google Workspace 협업 체험"
      description="실시간 문서 협업부터 화상회의까지, Google Workspace의 핵심 기능을 체험해보세요."
      productSlug="google-workspace"
      demoUrl="https://google-workspace-demo.vercel.app/"
    />
  )
}

// 예시 4: 단순한 플레이스홀더 (인터랙티브 준비 중)
export function SplashtopDemo() {
  return (
    <InteractiveDemo
      title="Splashtop 원격 접속 체험"
      description="실제 원격 접속 환경을 시뮬레이션으로 체험해보세요."
      productSlug="splashtop"
      demoUrl="https://splashtop-demo.vercel.app/"
    />
  )
}