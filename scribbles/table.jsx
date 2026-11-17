import React, { useState } from 'react';
import { ExternalLink, Layers, FileCode, Paintbrush, LineChart } from 'lucide-react';

const categoriesData = [
  {
	name: "Development",
	icon: FileCode,
	data: [
	  ["DEV-001", "React Fundamentals", "https://reactjs.org"],
	  ["DEV-002", "Advanced TypeScript", "https://typescriptlang.org"],
	  ["DEV-003", "CSS Architecture", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
	  ["DEV-004", "Node.js Backend", "https://nodejs.org"],
	]
  },
  {
	name: "Design",
	icon: Paintbrush,
	data: [
	  ["DES-101", "UI/UX Principles", "https://figma.com"],
	  ["DES-102", "Color Theory", "https://coolors.co"],
	  ["DES-103", "Typography Basics", "https://fonts.google.com"],
	  ["DES-104", "Interactive Prototyping", "https://framer.com"],
	]
  },
  {
	name: "Marketing",
	icon: LineChart,
	data: [
	  ["MKT-201", "SEO Strategies", "https://moz.com"],
	  ["MKT-202", "Content Funnels", "https://hubspot.com"],
	  ["MKT-203", "Social Campaigns", "https://buffer.com"],
	]
  },
  {
	name: "Management",
	icon: Layers,
	data: [
	  ["MGT-301", "Agile Methodologies", "https://atlassian.com"],
	  ["MGT-302", "Leadership", "https://hbr.org"],
	  ["MGT-303", "Project Planning", "https://asana.com"],
	]
  }
];

const styles = `
  /* Reset and base styles */
  * {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
  }
  
  .app-container {
	min-height: 100vh;
	background-color: #f8fafc;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
	color: #334155;
  }

  /* Card layout */
  .card {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 900px;
	background: #ffffff;
	border-radius: 16px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
	border: 1px solid #e2e8f0;
	overflow: hidden;
	min-height: 500px;
  }

  @media (min-width: 768px) {
	.card {
	  flex-direction: row;
	}
  }

  /* Sidebar and Tabs */
  .sidebar {
	background-color: #f8fafc;
	padding: 24px;
	border-bottom: 1px solid #e2e8f0;
	display: flex;
	flex-direction: column;
	gap: 8px;
  }

  @media (min-width: 768px) {
	.sidebar {
	  width: 240px;
	  border-bottom: none;
	  border-right: 1px solid #e2e8f0;
	}
  }

  .sidebar-title {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 1.2px;
	color: #64748b;
	font-weight: 600;
	margin-bottom: 12px;
	padding: 0 8px;
  }

  .tab-nav {
	display: flex;
	flex-direction: row;
	gap: 8px;
	overflow-x: auto;
  }

  @media (min-width: 768px) {
	.tab-nav {
	  flex-direction: column;
	}
  }

  .tab-button {
	display: flex;
	align-items: center;
	gap: 12px;
	width: 100%;
	padding: 12px 16px;
	background: transparent;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	text-align: left;
	font-size: 14px;
	font-weight: 500;
	color: #475569;
	transition: all 0.2s ease;
	white-space: nowrap;
  }

  .tab-button:hover:not(.active) {
	background-color: #e2e8f0;
	color: #0f172a;
  }

  .tab-button.active {
	background-color: #2563eb;
	color: #ffffff;
	box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
  }

  .tab-icon {
	width: 18px;
	height: 18px;
	opacity: 0.6;
  }

  .tab-button.active .tab-icon {
	opacity: 1;
	color: #dbeafe;
  }

  /* Main Content Area */
  .main-content {
	flex: 1;
	padding: 32px;
	display: flex;
	flex-direction: column;
  }

  .content-header {
	margin-bottom: 24px;
  }

  .content-title {
	font-size: 24px;
	font-weight: 600;
	color: #0f172a;
	margin-bottom: 4px;
  }

  .content-subtitle {
	font-size: 14px;
	color: #64748b;
  }

  /* Table Styles */
  .table-wrapper {
	overflow-x: auto;
  }

  .data-table {
	width: 100%;
	border-collapse: collapse;
	text-align: left;
  }

  .data-table th {
	padding: 12px 16px;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	color: #64748b;
	border-bottom: 1px solid #e2e8f0;
	font-weight: 600;
  }

  .data-table th.text-right {
	text-align: right;
  }

  .data-table td {
	padding: 16px;
	font-size: 14px;
	color: #1e293b;
	border-bottom: 1px solid #f1f5f9;
	font-weight: 500;
  }

  .data-table tr:last-child td {
	border-bottom: none;
  }

  .data-table tr:hover td {
	background-color: #f8fafc;
  }

  .code-badge {
	background-color: #f1f5f9;
	padding: 4px 8px;
	border-radius: 6px;
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
	font-size: 12px;
	color: #475569;
  }

  .link-button {
	display: inline-flex;
	align-items: center;
	justify-content: flex-end;
	gap: 6px;
	padding: 6px 12px;
	color: #2563eb;
	text-decoration: none;
	font-size: 13px;
	font-weight: 500;
	border-radius: 6px;
	transition: background-color 0.2s ease;
  }

  .link-button:hover {
	background-color: #eff6ff;
  }

  .link-button svg {
	width: 14px;
	height: 14px;
  }
`;

export default function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeCategory = categoriesData[activeTabIndex];

  return (
	<>
	  <style>{styles}</style>
	  <div className="app-container">
		
		<div className="card">
		  
		  {/* Left Sidebar */}
		  <aside className="sidebar">
			<h2 className="sidebar-title">Data Categories</h2>
			<nav className="tab-nav">
			  {categoriesData.map((category, index) => {
				const isActive = index === activeTabIndex;
				const Icon = category.icon;
				
				return (
				  <button
					key={category.name}
					onClick={() => setActiveTabIndex(index)}
					className={`tab-button ${isActive ? 'active' : ''}`}
				  >
					<Icon className="tab-icon" />
					<span>{category.name}</span>
				  </button>
				);
			  })}
			</nav>
		  </aside>

		  {/* Right Main Content */}
		  <main className="main-content">
			
			<div className="content-header">
			  <h1 className="content-title">{activeCategory.name} Data</h1>
			  <p className="content-subtitle">
				Showing {activeCategory.data.length} entries for this category.
			  </p>
			</div>

			{}
			<div className="table-wrapper">
			  <table className="data-table">
				<thead>
				  <tr>
					<th>Code</th>
					<th>Title</th>
					<th className="text-right">Action</th>
				  </tr>
				</thead>
				<tbody>
				  {activeCategory.data.map((row, rowIndex) => {
					const [code, title, link] = row;
					return (
					  <tr key={code || rowIndex}>
						<td>
						  <span className="code-badge">{code}</span>
						</td>
						<td>{title}</td>
						<td className="text-right">
						  <a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="link-button"
						  >
							View Link
							<ExternalLink />
						  </a>
						</td>
					  </tr>
					);
				  })}
				</tbody>
			  </table>
			</div>

		  </main>
		</div>
	  </div>
	</>
  );
}