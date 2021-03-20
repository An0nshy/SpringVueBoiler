package de.macroblocks.spring.vuejs.repository;

import java.util.Optional;

import de.macroblocks.spring.vuejs.models.ERole;
import de.macroblocks.spring.vuejs.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
