import React, { useState } from 'react';
import { Paper, Typography, Grid, Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import BalconyWorkImage from '../images/pexels-kseniachernaya-5691553.jpg';
import BedAssemblyRepairImage from '../images/pexels-kseniachernaya-5691553.jpg';
import CupboardDrawerFixingImage from '../images/pexels-kseniachernaya-5691553.jpg';
import DoorFittingRepairImage from '../images/pexels-kseniachernaya-5691553.jpg';
import DrillingHangingImage from '../images/pexels-kseniachernaya-5691553.jpg';
import FurnitureRepairImage from '../images/pexels-kseniachernaya-5691553.jpg';
import WindowCurtainInstallationImage from '../images/pexels-kseniachernaya-5691553.jpg';
import kitchenMain from '../images/kitchen-main.jpg'
import Drillandhang from '../images/Drillandhang.jpg'
import Doormain from '../images/doorMain.jpg'
import furnitureMain from '../images/furnitureMain.jpg'
import showcaseMain from '../images/showcaseMain.jpeg'
import tableMain from '../images/tableMain.jpg'
import writetingTable from '../images/writetingTable.jpg'
import cupboardMain from '../images/cupboardMain.jpg';
import balconyMain from '../images/balconyMain.jpeg';
import bedroomMain from '../images/bedroomMain.jpeg';

import fullHouseWithoutMaterial from '../images/fullHouseWithoutMaterial.jpg';

import ServiceDetail from './ServiceDetail';

const services = [
  {
    title: 'Full House Contract with Material',
    description: 'Full house carpentry work with material included.',
    image: WindowCurtainInstallationImage,
    subtasks: [
      { title: 'Main Door Installation/Repair', description: 'Install or repair main door.', image: WindowCurtainInstallationImage },
      { title: 'Bedroom Door Installation / Repair', description: 'Install or repair bedroom door.', image: WindowCurtainInstallationImage },
      { title: 'Window Door Installation / Repair', description: 'Install or repair window door.', image: WindowCurtainInstallationImage },
      { title: 'Kitchen Slab', description: 'Install or repair kitchen slab.', image: WindowCurtainInstallationImage },
      { title: 'Kitchen Cupboard', description: 'Install or repair kitchen cupboard.', image: WindowCurtainInstallationImage },
      { title: 'Kitchen Store Cupboard', description: 'Install or repair kitchen store cupboard.', image: kitchenMain },
      { title: 'Bedroom Slab', description: 'Install or repair bedroom slab.', image: WindowCurtainInstallationImage },
      { title: 'Bedroom Cupboard', description: 'Install or repair bedroom cupboard.', image: WindowCurtainInstallationImage },
      { title: 'Pooja Room Cupboard', description: 'Install or repair pooja room cupboard.', image: WindowCurtainInstallationImage },
      { title: 'Bedroom Showcase', description: 'Install or repair bedroom showcase.', image: WindowCurtainInstallationImage },
      { title: 'Hall Showcase', description: 'Install or repair hall showcase.', image: WindowCurtainInstallationImage },
      { title: 'Writing Table', description: 'Install or repair writing table.', image: WindowCurtainInstallationImage },
      { title: 'Dressing Table', description: 'Install or repair dressing table.', image: WindowCurtainInstallationImage },
    ]
  },
  {
    title: 'Full House Contract without Material',
    description: 'Full house carpentry work without material included.',
    image: fullHouseWithoutMaterial,
    subtasks: [
      { title: 'Main Door Installation/Repair', description: 'Install or repair main door.', image: WindowCurtainInstallationImage },
      { title: 'Bedroom Door Installation / Repair', description: 'Install or repair bedroom door.', image: WindowCurtainInstallationImage },
      { title: 'Window Door Installation / Repair', description: 'Install or repair window door.', image: WindowCurtainInstallationImage },
      { title: 'Kitchen Slab', description: 'Install or repair kitchen slab.', image: WindowCurtainInstallationImage },
      { title: 'Kitchen Cupboard', description: 'Install or repair kitchen cupboard.', image: WindowCurtainInstallationImage },
      { title: 'Kitchen Store Cupboard', description: 'Install or repair kitchen store cupboard.', image: WindowCurtainInstallationImage },
      { title: 'Bedroom Slab', description: 'Install or repair bedroom slab.', image: WindowCurtainInstallationImage },
      { title: 'Bedroom Cupboard', description: 'Install or repair bedroom cupboard.', image: WindowCurtainInstallationImage },
      { title: 'Pooja Room Cupboard', description: 'Install or repair pooja room cupboard.', image: WindowCurtainInstallationImage },
      { title: 'Bedroom Showcase', description: 'Install or repair bedroom showcase.', image: WindowCurtainInstallationImage },
      { title: 'Hall Showcase', description: 'Install or repair hall showcase.', image: WindowCurtainInstallationImage },
      { title: 'Writing Table', description: 'Install or repair writing table.', image: WindowCurtainInstallationImage },
      { title: 'Dressing Table', description: 'Install or repair dressing table.', image: WindowCurtainInstallationImage },
    ]
  },
  {
    title: 'Balcony Work',
    description: 'Enhance your balcony with professional carpentry work.',
    image: balconyMain,
    subtasks: [
      { title: 'Ceiling-mounted Hanger Installation', description: 'Install ceiling-mounted hangers.', image: BalconyWorkImage },
      { title: 'Wall/Door Hanger Installation', description: 'Install wall or door hangers.', image: BalconyWorkImage },
    ]
  },
  {
    title: 'Kitchen interios',
    description: 'Enhance your balcony with professional carpentry work.',
    image: kitchenMain,
    subtasks: [
      { title: 'Ceiling-mounted Hanger Installation', description: 'Install ceiling-mounted hangers.', image: BalconyWorkImage },
      { title: 'Wall/Door Hanger Installation', description: 'Install wall or door hangers.', image: BalconyWorkImage },
    ]
  },
  {
    title: 'Bed Assembly & Repair',
    description: 'Assembling and repairing beds.',
    image: bedroomMain,
    subtasks: [
      { title: 'Bed Support Repair', description: 'Repair bed support.', image: BedAssemblyRepairImage },
      { title: 'Bed Legs/Headboard Repair', description: 'Repair bed legs and headboard.', image: BedAssemblyRepairImage },
      { title: 'Bed Modification', description: 'Modify bed structure.', image: BedAssemblyRepairImage },
    ]
  },
  {
    title: 'Cupboard & Drawer Fixing',
    description: 'Fixing and assembling cupboards and drawers.',
    image: cupboardMain,
    subtasks: [
      { title: 'Kitchen Slab', description: 'Install or repair kitchen slab.', image: CupboardDrawerFixingImage },
      { title: 'Kitchen Cupboard', description: 'Install or repair kitchen cupboard.', image: CupboardDrawerFixingImage },
      { title: 'Kitchen Store Cupboard', description: 'Install or repair kitchen store cupboard.', image: CupboardDrawerFixingImage },
      { title: 'Bedroom Slab', description: 'Install or repair bedroom slab.', image: CupboardDrawerFixingImage },
      { title: 'Bedroom Cupboard', description: 'Install or repair bedroom cupboard.', image: CupboardDrawerFixingImage },
      { title: 'Pooja Room Cupboard', description: 'Install or repair pooja room cupboard.', image: CupboardDrawerFixingImage },
      { title: 'Cupboard Hinge Services', description: 'Repair or replace cupboard hinges.', image: CupboardDrawerFixingImage },
      { title: 'Drawer Channel Repair', description: 'Repair drawer channels.', image: CupboardDrawerFixingImage },
      { title: 'Drawer Channel Replacement', description: 'Replace drawer channels.', image: CupboardDrawerFixingImage },
      { title: 'Cupboard Handle Installation / Replacement', description: 'Install or replace cupboard handles.', image: CupboardDrawerFixingImage },
      { title: 'Cupboard Lock Installation / Replacement', description: 'Install or replace cupboard locks.', image: CupboardDrawerFixingImage },
    ]
  },
  {
    title: 'Door Fitting & Repair',
    description: 'Professional door fitting and repair services.',
    image: Doormain,
    subtasks: [
      { title: 'Main Door Installation/Repair', description: 'Install or repair main door.', image: DoorFittingRepairImage },
      { title: 'Bedroom Door Installation / Repair', description: 'Install or repair bedroom door.', image: DoorFittingRepairImage },
      { title: 'Window Door Installation / Repair', description: 'Install or repair window door.', image: DoorFittingRepairImage },
      { title: 'Door Accessory Installation', description: 'Install door accessories.', image: DoorFittingRepairImage },
      { title: 'Aldrop/Peep Installation', description: 'Install aldrop or peep hole.', image: DoorFittingRepairImage },
      { title: 'Wooden Door Installation/Repair', description: 'Install or repair wooden doors.', image: DoorFittingRepairImage },
      { title: 'Major Door Repair', description: 'Perform major door repairs.', image: DoorFittingRepairImage },
      { title: 'Minor Door Repair', description: 'Perform minor door repairs.', image: DoorFittingRepairImage },
      { title: 'Door Hinge Installation', description: 'Install door hinges.', image: DoorFittingRepairImage },
      { title: 'Door Lock Installation/ Repair / Replacement', description: 'Install, repair, or replace door locks.', image: DoorFittingRepairImage },
      { title: 'Mesh Door Installation / Replacement', description: 'Install or replace mesh doors.', image: DoorFittingRepairImage },
      { title: 'Overhead Door Closer Installation', description: 'Install overhead door closers.', image: DoorFittingRepairImage },
      { title: 'Wall Mounted Door Closer Installation', description: 'Install wall mounted door closers.', image: DoorFittingRepairImage },
      { title: 'Wooden Sliding Door Repair', description: 'Repair wooden sliding doors.', image: DoorFittingRepairImage },
    ]
  },
  {
    title: 'Drilling & Hanging',
    description: 'Drilling holes and hanging items like photo frames.',
    image: Drillandhang,
    subtasks: [
      { title: 'Bathroom Hanger and Holder Installation', description: 'Install bathroom hangers and holders.', image: DrillingHangingImage },
      { title: 'Drill & Hang (Wall Decor)', description: 'Drill and hang wall decor items.', image: DrillingHangingImage },
      { title: 'Bathroom Installation', description: 'Install bathroom fixtures.', image: DrillingHangingImage },
      { title: 'Glass Shelf Installation', description: 'Install glass shelves.', image: DrillingHangingImage },
      { title: 'Wooden Shelf Installation', description: 'Install wooden shelves.', image: DrillingHangingImage },
      { title: 'Corner Guard and Safety Lock', description: 'Install corner guards and safety locks.', image: DrillingHangingImage },
    ]
  },
  {
    title: 'Furniture Repair',
    description: 'Restoration and repair of furniture.',
    image: furnitureMain,
    subtasks: [
      { title: 'Bush Installation for Legs', description: 'Install bushings for furniture legs.', image: FurnitureRepairImage },
      { title: 'Legs Adjustment', description: 'Adjust furniture legs.', image: FurnitureRepairImage },
    ]
  },
  {
    title: 'Showcase',
    description: 'Showcase installations and repairs.',
    image: showcaseMain,
    subtasks: [
      { title: 'Bedroom Showcase', description: 'Install or repair bedroom showcases.', image: FurnitureRepairImage },
      { title: 'Hall Showcase', description: 'Install or repair hall showcases.', image: FurnitureRepairImage },
    ]
  },
  {
    title: 'Table',
    description: 'Table installations and repairs.',
    image: tableMain,
    subtasks: [
      { title: 'Writing Table', description: 'Install or repair writing tables.', image: writetingTable },
      { title: 'Dressing Table', description: 'Install or repair dressing tables.', image: FurnitureRepairImage },
    ]
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  return (
    <Paper elevation={0} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={6} sm={6} md={4} key={index}>
            <Card onClick={() => handleServiceClick(service)}>
              <CardMedia component="img" height="140" image={service.image} loading="lazy" alt={service.title} />
              <CardContent>
                <Typography variant="h7" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={!!selectedService} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{selectedService?.title}</DialogTitle>
        <DialogContent>
          {selectedService && <ServiceDetail service={selectedService} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ServicesSection;
