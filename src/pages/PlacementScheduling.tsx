import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Plus,
  Edit,
  Trash2,
  Building2,
  User,
  Phone,
  Mail,
  Filter,
  Search
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const scheduledEvents = [
  {
    id: 1,
    title: "Google Technical Interview",
    company: "Google",
    date: "2024-01-25",
    time: "10:00 AM",
    venue: "Main Auditorium",
    type: "Interview",
    participants: 15,
    status: "Scheduled",
    description: "Technical interview for software engineering positions"
  },
  {
    id: 2,
    title: "Microsoft HR Round",
    company: "Microsoft",
    date: "2024-01-26",
    time: "2:00 PM",
    venue: "Conference Room 1",
    type: "Interview",
    participants: 12,
    status: "Scheduled",
    description: "HR round for product management positions"
  },
  {
    id: 3,
    title: "Amazon Campus Drive",
    company: "Amazon",
    date: "2024-01-28",
    time: "9:00 AM",
    venue: "Computer Lab 1",
    type: "Campus Drive",
    participants: 45,
    status: "Scheduled",
    description: "Full day campus recruitment drive"
  }
];

const upcomingEvents = [
  {
    id: 4,
    title: "TCS Recruitment Drive",
    company: "TCS",
    date: "2024-02-01",
    time: "10:00 AM",
    venue: "Main Auditorium",
    type: "Campus Drive",
    participants: 30,
    status: "Upcoming"
  },
  {
    id: 5,
    title: "Infosys Technical Round",
    company: "Infosys",
    date: "2024-02-03",
    time: "2:00 PM",
    venue: "Conference Room 2",
    type: "Interview",
    participants: 20,
    status: "Upcoming"
  }
];

export default function PlacementScheduling() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [newEvent, setNewEvent] = useState({
    title: '',
    company: '',
    date: '',
    time: '',
    venue: '',
    type: '',
    participants: '',
    description: ''
  });

  const handleCreateEvent = () => {
    console.log('Creating event:', newEvent);
    // Handle creation logic
    setIsCreateModalOpen(false);
    setNewEvent({
      title: '',
      company: '',
      date: '',
      time: '',
      venue: '',
      type: '',
      participants: '',
      description: ''
    });
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    setIsEditModalOpen(true);
  };

  const handleDeleteEvent = (id) => {
    console.log(`Deleting event ${id}`);
    // Handle deletion logic
  };

  const allEvents = [...scheduledEvents, ...upcomingEvents];
  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || event.type.toLowerCase() === filterType;
    const matchesStatus = filterStatus === 'all' || event.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Scheduling
        </h1>
        <p className="text-muted-foreground mt-2">
          Coordinate interview slots and recruitment events.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Events</p>
                <p className="text-2xl font-bold">15</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Scheduled</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Participants</p>
                <p className="text-2xl font-bold">122</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Companies</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Events</CardTitle>
            <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Schedule Event
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Schedule New Event</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Event Title</label>
                      <Input
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                        placeholder="e.g., Google Technical Interview"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Company</label>
                      <Input
                        value={newEvent.company}
                        onChange={(e) => setNewEvent({...newEvent, company: e.target.value})}
                        placeholder="e.g., Google"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Date</label>
                      <Input
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Time</label>
                      <Input
                        type="time"
                        value={newEvent.time}
                        onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Venue</label>
                      <Input
                        value={newEvent.venue}
                        onChange={(e) => setNewEvent({...newEvent, venue: e.target.value})}
                        placeholder="e.g., Main Auditorium"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Event Type</label>
                      <Select value={newEvent.type} onValueChange={(value) => setNewEvent({...newEvent, type: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Interview">Interview</SelectItem>
                          <SelectItem value="Campus Drive">Campus Drive</SelectItem>
                          <SelectItem value="Presentation">Presentation</SelectItem>
                          <SelectItem value="Workshop">Workshop</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Expected Participants</label>
                    <Input
                      type="number"
                      value={newEvent.participants}
                      onChange={(e) => setNewEvent({...newEvent, participants: e.target.value})}
                      placeholder="e.g., 25"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <Textarea
                      value={newEvent.description}
                      onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                      placeholder="Describe the event..."
                      rows={3}
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleCreateEvent}>
                      Schedule Event
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="interview">Interview</SelectItem>
                <SelectItem value="campus drive">Campus Drive</SelectItem>
                <SelectItem value="presentation">Presentation</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Events List */}
      <div className="grid gap-4">
        {filteredEvents.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <Badge variant={event.status === 'Scheduled' ? 'default' : 'secondary'}>
                        {event.status}
                      </Badge>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4 mr-2" />
                      <span className="mr-4">{event.company}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{new Date(event.date).toLocaleDateString()}</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="mr-4">{event.time}</span>
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.venue}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm">{event.participants} participants</span>
                        </div>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedEvent(event)}
                        >
                          View Details
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditEvent(event)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteEvent(event.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <Card className="fixed inset-4 z-50 bg-background border shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Event Details</CardTitle>
              <Button variant="ghost" onClick={() => setSelectedEvent(null)}>
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Event Information</h4>
                <p>Title: {selectedEvent.title}</p>
                <p>Company: {selectedEvent.company}</p>
                <p>Type: {selectedEvent.type}</p>
                <p>Status: {selectedEvent.status}</p>
              </div>
              <div>
                <h4 className="font-semibold">Schedule Details</h4>
                <p>Date: {new Date(selectedEvent.date).toLocaleDateString()}</p>
                <p>Time: {selectedEvent.time}</p>
                <p>Venue: {selectedEvent.venue}</p>
                <p>Participants: {selectedEvent.participants}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <p className="text-sm text-muted-foreground">{selectedEvent.description}</p>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setSelectedEvent(null)}>
                Close
              </Button>
              <Button>
                Edit Event
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
