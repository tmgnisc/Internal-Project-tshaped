'use client'
import { Box, Stack, Typography, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const ProjectsPage = () => {
  const checklist = [
    'Add new project with domain + target locale',
    'Assign team + LLM budgets',
    'Archive projects and clean old data',
  ];

  return (
    <PageContainer title="Project Add/Delete" description="Manage SEO projects">
      <Box>
        <DashboardCard title="Project Add/Delete" subtitle="Create, onboard, or retire a project">
          <Stack spacing={3}>
            <Typography variant="body2" color="textSecondary">
              Spin up projects quickly and keep the workspace lean by archiving work you no longer need.
            </Typography>
            <Divider />
            <List dense>
              {checklist.map((item) => (
                <ListItem key={item} disableGutters>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained">Add Project</Button>
              <Button variant="outlined" color="error">Delete / Archive</Button>
            </Stack>
          </Stack>
        </DashboardCard>
      </Box>
    </PageContainer>
  );
};

export default ProjectsPage;



